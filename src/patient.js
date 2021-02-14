import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  ArrayField,
  SingleFieldList,
  ChipField,
  BooleanField,
  DateField,
} from 'react-admin';

export const PatientList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="resourceType" />
      <TextField source="id" />
      <ArrayField source="identifier">
        <SingleFieldList>
          <ChipField source="system" />
        </SingleFieldList>
      </ArrayField>
      <BooleanField source="active" />
      <ArrayField source="name">
        <SingleFieldList>
          <ChipField source="use" />
        </SingleFieldList>
      </ArrayField>
      <ArrayField source="telecom">
        <SingleFieldList>
          <ChipField source="value" />
        </SingleFieldList>
      </ArrayField>
      <TextField source="gender" />
      <DateField source="birthDate" />
      <ArrayField source="address">
        <SingleFieldList>
          <ChipField source="use" />
        </SingleFieldList>
      </ArrayField>
      <ArrayField source="_birthDate.extension">
        <SingleFieldList>
          <ChipField source="url" />
        </SingleFieldList>
      </ArrayField>
      <BooleanField source="deceasedBoolean" />
      <ArrayField source="contact">
        <SingleFieldList>
          <ChipField source="relationship" />
        </SingleFieldList>
      </ArrayField>
      <TextField source="managingOrganization.reference" />
      <ArrayField source="extension">
        <SingleFieldList>
          <ChipField source="url" />
        </SingleFieldList>
      </ArrayField>
      <ArrayField source="maritalStatus.coding">
        <SingleFieldList>
          <ChipField source="system" />
        </SingleFieldList>
      </ArrayField>
      <BooleanField source="multipleBirthBoolean" />
      {/* <ArrayField source="communication">
        <SingleFieldList>
          <ChipField source="language.coding" />
        </SingleFieldList>
      </ArrayField> */}
    </Datagrid>
  </List>
);
