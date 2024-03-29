// in src/admin/App.jsx
import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://afj-test.veridid.services');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="connections" list={ListGuesser} edit={EditGuesser} recordRepresentation="name" />
  </Admin>
);

export default App;