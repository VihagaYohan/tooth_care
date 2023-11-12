import React, {Component, useState, useEffect} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

// components
import {UIContainer, UITextView} from '../../components';

// constants
import {DIMENSION, ICONS, STYLES} from '../../constants';

// models
import {TreatmentType} from '../../domain/entities';

// navigation
import {Routes} from '../../navigation';

// services
import {getAllTreatmentTypes} from '../../services/TreatmentTypesService';

const {EntypoIcons} = ICONS;

const TreatmentsListScreen = ({
  navigation,
  route,
}: {
  navigation: StackNavigationProp<any, any>;
  route: RouteProp<any, any>;
}) => {
  const [data, setData] = useState<TreatmentType[]>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // fetch all treatment types
  const fetchAllTreatmentTypes = async () => {
    try {
      let result = await getAllTreatmentTypes();
      if (result !== undefined) {
        setData(result);
      }
    } catch (error) {
      setError('Unable to fetch treatment types');
    } finally {
      setLoading(false);
    }
  };

  // navigate to new treatment type screen
  const navigateToDetails = () => {
    navigation.navigate(Routes.treatments.newTreatment);
  };

  // render UI
  const RenderItem: ListRenderItem<TreatmentType> = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => navigateToDetails()}>
        <View style={{flexDirection: 'row'}}>
          <UITextView text={`${index + 1}. `} textStyle={STYLES.body1} />
          <UITextView text={`${item.type}`} textStyle={STYLES.body1} />
        </View>

        <EntypoIcons name="chevron-right" size={20} />
      </TouchableOpacity>
    );
  };

  return (
    <UIContainer>
      <React.Fragment>
        {data !== undefined && data.length > 0 && (
          <FlatList
            data={data}
            keyExtractor={(item, index) => `treatments-list-${index}`}
            renderItem={({item, index}) => (
              <RenderItem
                item={item}
                index={index}
                separators={{
                  highlight: function (): void {
                    throw new Error('Function not implemented.');
                  },
                  unhighlight: function (): void {
                    throw new Error('Function not implemented.');
                  },
                  updateProps: function (
                    select: 'leading' | 'trailing',
                    newProps: any,
                  ): void {
                    throw new Error('Function not implemented.');
                  },
                }}
              />
            )}
          />
        )}
      </React.Fragment>
    </UIContainer>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: DIMENSION.PADDING,
  },
});

export default TreatmentsListScreen;
