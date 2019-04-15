export interface ISite {
    "id": String;
    "clientId": String;
    "title": String;
    "createdAt": String;
    "updatedAt": String;
    "contacts": IContact;
    "address": IAddress;
    "images": String[];
    "tags": String[]
}

export interface ISiteDetail {
    "id": String;
    "clientId": IClient;
    "title": String;
    "createdAt": String;
    "updatedAt": String;
    "contacts": IContact;
    "address": IAddress;
    "images": String[];
    "tags": String[]
}

export interface IClient {
    "id": String;
    "givenName": String;
    "logo": String;
    "createdAt": String;
    "updatedAt": String;
    "tags": String[];
}
export interface IContact {
 "main": IMain
}
export interface IMain {
 	"id": String;
	"firstName": String;
	"lastName": String;
	"email": String;
	"phoneNumber": String;
	"jobTitle": String;
	"address": IAddress
}

export interface IAddress {
	          "zipCode": String;
	          "city": String;
	          "street": String;
	          "country": String;
	          "state": String;
	        }
