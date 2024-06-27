import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { HOSPITAL_TITLE_FIELD } from "./HospitalTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const HospitalShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="phone" source="phone" />
        <TextField label="services" source="services" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Appointment"
          target="hospitalId"
          label="Appointments"
        >
          <Datagrid rowClick="show">
            <TextField label="appointmentDate" source="appointmentDate" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="hospital"
              source="hospital.id"
              reference="Hospital"
            >
              <TextField source={HOSPITAL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Location"
          target="hospitalId"
          label="Locations"
        >
          <Datagrid rowClick="show">
            <TextField label="address" source="address" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="hospital"
              source="hospital.id"
              reference="Hospital"
            >
              <TextField source={HOSPITAL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="latitude" source="latitude" />
            <TextField label="longitude" source="longitude" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
