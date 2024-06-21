import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { ClientTitle } from "../client/ClientTitle";
import { RestaurantTitle } from "../restaurant/RestaurantTitle";
import { TableTitle } from "../table/TableTitle";

export const ReservationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="client.id" reference="Client" label="Client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <DateTimeInput label="date" source="date" />
        <NumberInput step={1} label="numberOfGuests" source="numberOfGuests" />
        <ReferenceInput
          source="restaurant.id"
          reference="Restaurant"
          label="Restaurant"
        >
          <SelectInput optionText={RestaurantTitle} />
        </ReferenceInput>
        <TextInput label="specialRequests" multiline source="specialRequests" />
        <ReferenceInput source="table.id" reference="Table" label="Table">
          <SelectInput optionText={TableTitle} />
        </ReferenceInput>
        <DateTimeInput label="time" source="time" />
      </SimpleForm>
    </Create>
  );
};
