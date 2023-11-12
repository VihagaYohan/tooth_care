import React, {Component, useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';

// components
import {UIContainer, UITextView, UILoader} from '../../components';

// constants
import {STYLES, ICONS, DIMENSION} from '../../constants';

// services
import {getAllPhysicians} from '../../services/PhysicianService';

// models
import IPhysician from '../../domain/models/IPhysician';

const {EntypoIcons} = ICONS;

const PhysiciansListScreen = () => {
  const [data, setData] = useState<IPhysician[]>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchAllPhysicians();
  }, []);

  // fetch all physicians
  const fetchAllPhysicians = async () => {
    try {
      let result = await getAllPhysicians();
      if (result !== undefined) {
        setData(result);
      }
    } catch (error) {
      setError('Unable to retrive data');
    } finally {
      setLoading(false);
    }
  };

  // navigate to physician details screen
  const navigateToDetails = (id: number) => {
    console.log(`clicked: ${id}`);
  };

  // render UI
  const RenderItem: ListRenderItem<IPhysician> = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => navigateToDetails(item.doctorId)}>
        <View style={{flexDirection: 'row'}}>
          <UITextView text={`${index + 1}. `} textStyle={STYLES.body1} />
          <UITextView text={`${item.getFullName()}`} textStyle={STYLES.body1} />
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
            keyExtractor={(item, index) => `physicians-list-${index}`}
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

export default PhysiciansListScreen;
