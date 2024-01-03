import yargs from "yargs"
import * as contactService from "./contacts.js";

const invokeAction = async ({ action, id, ...data }) => {
  switch (action) {
    case "list":
      const allContacts = await contactService.getAllContacts();
      return console.log(allContacts);
    case "get":
      const oneContact = await contactService.getContactById(id);
      return console.log(oneContact);
    case "add":
        const newContact = await contactService.addContact(data);
        return console.log(newContact);
        case "remove":
          const deleteContact = await contactService.deleteById(id);
          return console.log(deleteContact);
          default:
            console.warn('\x1B[31m Unknown action type!');
  }
};

// invokeAction({action:"list"});
// invokeAction({action: "get", id: "qdggE76Jtbfd9eWJHrssH"})

// invokeAction({
//   action: "add",
//   name: "Alica",
//   phone: "(233) 738-2647",
//   email: "pharetra.ut@dictum.co.uk",
// // });
// invokeAction({action: "remove", id: "HuD1f9ccfCcFbSNSVVroL"})

const {argv} = yargs(process.argv.slice(2));
invokeAction(argv)