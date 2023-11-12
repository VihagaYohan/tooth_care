import React, {Component, useEffect, useState} from 'react';
import IPhysician from '../domain/models/IPhysician';
import {TreatmentType} from '../domain/entities';

const useFetchList = (list: any) => {
  const [data, setData] = useState<IPhysician[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    try {
      let result = list();
      console.log(result);
      return result;
    } catch (error) {
      setError('Unable to retrive data');
    } finally {
      setLoading(false);
    }
  }, []);

  return {data, error, loading};
};

export default useFetchList;
