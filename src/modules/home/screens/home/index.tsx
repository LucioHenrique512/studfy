import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SYButton, SYText, SYTextInput } from "../../../../components";
import { sessionLogoutUser } from "../../../../redux/session/actions";
import { showToast } from "../../../../utils/toastNoatification";
import { Container, Section } from "./styles";
import {
  Header,
  MainCard,
  HorizontalMenu,
  ActivitiesItem,
  FinishModal,
} from "../../components";
import { signOut } from "../../../../services/firebase";
import { useNavigation, useRoute } from "@react-navigation/core";
import { ActionType, RootState } from "../../../../redux/types";
import { SessionType } from "../../../../redux/session/types";
import {
  ActivityType,
  InitActivityValue,
  SubjectType,
} from "../../../../types";
import { View, ListRenderItem, Alert } from "react-native";
import { Sizes } from "../../../../commons";
import { ActivityStateType } from "../../../../redux/activities/types";
import { SubjectStateType } from "../../../../redux/subjects/types";
import {
  CleanSubjectsData,
  SetSelectedSubjectId,
  SetSubjectList,
  UpdateSelectedSubject,
} from "../../../../redux/subjects/actions";
import { useTheme } from "styled-components";
import { FontAwesome5 } from "@expo/vector-icons";
import database from "@react-native-firebase/database";
import { DATABASE_REFS } from "../../../../services/firebase";
import {
  CleanActivitiesList,
  SetActivitiesList,
} from "../../../../redux/activities/actions";

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const { navigate, addListener } = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [finishingActivity, setFinishingActivity] =
    useState<ActivityType>(InitActivityValue);

  const { user }: SessionType = useSelector(
    (store: RootState) => store.session
  );

  const activities: ActivityStateType = useSelector(
    (store: RootState) => store.activities
  );

  const subjects: SubjectStateType = useSelector(
    (store: RootState) => store.subjects
  );

  const { background, white_text } = useTheme();

  useEffect(() => {
    database()
      .ref(`${DATABASE_REFS.SUBJECTS}/${user.uid}`)
      .on("value", (snapshot) => {
        const subjects = snapshot.val();
        dispatch(SetSubjectList(subjects));
      });
  }, [user.uid]);

  useEffect(() => {
    const getSelectedSubject = () => {
      database()
        .ref(
          `${DATABASE_REFS.SUBJECTS}/${user.uid}/${subjects.selectedSubjectId}`
        )
        .on("value", (snapshot) => {
          const subject = snapshot.val();
          dispatch(UpdateSelectedSubject(subject));
        });
    };
    if (subjects.selectedSubjectId !== "") getSelectedSubject();
  }, [user.uid, subjects.selectedSubjectId]);

  useEffect(() => {
    database()
      .ref(`${DATABASE_REFS.ACTIVITIES}/${user.uid}`)
      .on("value", (snapshot) => {
        const activities = snapshot.val();
        dispatch(SetActivitiesList(activities));
      });
  }, [user.uid]);

  const handleLogout = () => {
    signOut().then(() => {
      dispatch(sessionLogoutUser());
      dispatch(CleanSubjectsData());
      dispatch(CleanActivitiesList());
    });
  };

  const handleFinishActivity = (value: string) => {
    // console.log(finishingActivity);
    // console.log(value);
    setModalLoading(true);

    const updates: any = {};

    updates[
      `${DATABASE_REFS.ACTIVITIES}/${user.uid}/${finishingActivity?.id}/punctuation/note`
    ] = parseFloat(value);

    updates[
      `${DATABASE_REFS.ACTIVITIES}/${user.uid}/${finishingActivity?.id}/finished`
    ] = true;

    updates[
      `${DATABASE_REFS.SUBJECTS}/${user.uid}/${finishingActivity?.subjectId}/punctuation/note`
    ] = database.ServerValue.increment(parseFloat(value));

    console.log(updates);
    database()
      .ref()
      .update(updates)
      .then(() => {
        setModalLoading(false);
        setShowModal(false);
        navigate("aceptScenne", {
          text: "Atividade finalizada sucesso!",
          animationType: "rocket",
          onAnimationFinish: () => {
            navigate("home");
          },
        });
      });
  };

  const handleFinishActivityClick = (activity: ActivityType) => {
    setFinishingActivity(activity);
    setShowModal(true);
  };

  const handleEditActivityClick = (activity: ActivityType) => {
    navigate("activityForm", {
      activity,
    });
  };

  const handleDeletActivity = (activity: ActivityType) => {
    Alert.alert("Atenção!", `Você realmente deseja excluir essa atividade?`, [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => {
          database()
            .ref(`${DATABASE_REFS.ACTIVITIES}/${user.uid}/${activity.id}`)
            .remove(() => {
              navigate("aceptScenne", {
                text: "Atividade excluida!",
                onAnimationFinish: () => {
                  navigate("home");
                },
              });
            });
        },
      },
    ]);
  };

  const RenderItem: ListRenderItem<any> = ({ item }) => (
    <ActivitiesItem
      key={item.id}
      activity={item}
      handleFinishActivity={handleFinishActivityClick}
      handleEditActivity={handleEditActivityClick}
      handleDeleteActivity={handleDeletActivity}
    />
  );

  const FilterSection = () => {
    return (
      <View style={{ backgroundColor: background }}>
        <Section>
          <SYText text="Disciplinas" secondary />
        </Section>

        <HorizontalMenu
          subjects={subjects.itens}
          selectedSubjectId={subjects.selectedSubjectId}
          onPressSubject={(subject) => {
            dispatch(SetSelectedSubjectId(subject.id));
          }}
          onPressAddSubject={() => {
            navigate("subjectForm");
          }}
        />

        <Section>
          <SYText text="Atividades" secondary />
        </Section>
      </View>
    );
  };

  const ListHeaderComponent = () => {
    return (
      <Header user={user} logoutFunction={handleLogout}>
        <MainCard
          cardValue={subjects.selectedSubject?.punctuation.note}
          maxCardValue={subjects.selectedSubject?.punctuation.maxNote}
          subjectName={subjects.selectedSubject?.name}
          midValue={subjects.selectedSubject?.punctuation.midNote}
        />
      </Header>
    );
  };

  const ListFooterComponent = () => {
    return (
      <View
        style={{
          marginBottom: Sizes.verticalScale(20),
          marginHorizontal: Sizes.verticalScale(19),
        }}
      >
        <SYButton
          text={"ADICIONAR ATIVIDADE"}
          onPress={() => {
            if (Object.keys(subjects.itens).length === 0) {
              showToast({
                text1: "Atenção!",
                text2: "Adicione pelo menos uma diciplina primeiro!",
                type: "info",
              });
            } else {
              navigate("activityForm");
            }
          }}
          icon={
            <FontAwesome5
              name="plus"
              size={Sizes.fontScale(20)}
              color={white_text}
            />
          }
        />
      </View>
    );
  };

  return (
    <View style={{ paddingBottom: Sizes.fontScale(45) }}>
      <Container
        sections={[
          {
            data: Object.keys(activities?.itens).map((key: any) => ({
              ...activities?.itens[key],
              id: key,
            })),
          },
        ]}
        stickyHeaderIndices={[0]}
        stickySectionHeadersEnabled
        renderItem={RenderItem}
        ListHeaderComponent={() => <ListHeaderComponent />}
        renderSectionHeader={() => <FilterSection />}
        ListFooterComponent={() => <ListFooterComponent />}
      />
      <FinishModal
        showModal={showModal}
        handleClose={() => {
          setShowModal(false), setModalLoading(false);
        }}
        handleSubmit={handleFinishActivity}
        maxValue={finishingActivity.punctuation.maxNote}
        loading={modalLoading}
      />
    </View>
  );
};
