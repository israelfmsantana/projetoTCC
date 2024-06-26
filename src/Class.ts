export class Login {
  username: string;
  password: string;
}



export class User {
  id?: number;
  username: string;
  password: string;
  profile: ProfileEnum;
}
export class UserCreateDTO {
  username: string;
  password: string;
}
export class UserUpdateDTO {
  id?: number;
  password: string;
}



export enum ProfileEnum {
  USER = 'user',
  ADMIN = 'admin',
}



export class Pal {
  id?: number;
  name: string;
  power: string;
}
export class PalCreateDTO {
  name: string;
  power: string;
}
export class PalUpdateDTO {
  id?: number;
  name: string;
  power: string;
}



export class Resource {
  id?: number;
  name: string;
}
export class ResourceCreateDTO {
  name: string;
}
export class ResourceUpdateDTO {
  id?: number;
  name: string;
}


export class Element {
  id?: number;
  name: string;
}
export class ElementCreateDTO {
  name: string;
}
export class ElementUpdateDTO {
  id?: number;
  name: string;
}



export class Activity {
  id?: number;
  name: string;
}
export class ActivityCreateDTO {
  name: string;
}
export class ActivityUpdateDTO {
  id?: number;
  name: string;
}











export class HaveResource {
  id?: number;
  resource: Resource;
  pal: Pal;
}
export class HaveResourceCreateDTO {
  palId: number;
  resourceId: number;
}
export class HaveResourceUpdateDTO {
  id?: number;
  palId: number;
  resourceId: number;
}



export class HavePal {
  id?: number;
  user: User;
  pal: Pal;
}
export class HavePalCreateDTO {
  palId: number;
  userId: number;
}
export class HavePalUpdateDTO {
  id?: number;
  palId: number;
  userId: number;
}



export class HaveElement {
  id?: number;
  element: Element;
  pal: Pal;
}
export class HaveElementCreateDTO {
  palId: number;
  elementId: number;
}
export class HaveElementUpdateDTO {
  id?: number;
  palId: number;
  elementId: number;
}



export class HaveActivity {
  id?: number;
  activity: Activity;
  pal: Pal;
}
export class HaveActivityCreateDTO {
  palId: number;
  activityId: number;
}
export class HaveActivityUpdateDTO {
  id?: number;
  palId: number;
  activityId: number;
}