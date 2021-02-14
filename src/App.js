import * as React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser, fetchUtils } from 'react-admin';
import dataProvider from './dataProvider';
import { PatientList } from './patient';

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="Patient" list={PatientList} edit={EditGuesser} />
  </Admin>
);

export default App;
