/// <reference path="./crud.d.ts" />
import { RowId, RowElement } from interface.ts
import * as CRUD from './crud'

let row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'salva',
  }

const newRowId: RowId = CRUD.insertRow(row);
const updateRow: RowElement = {...row, age: 23};
CRUD.updateRow(newRowId, updateRow);
CRUD.deleteRow(newRowId);

