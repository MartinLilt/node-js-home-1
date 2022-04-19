const fs = require('fs/promises');
const path = require('path');
const { randomUUID } = require('crypto');
const ct = require('./contact.json');

const readContent = async () => {
  const content = await fs.readFile(
    path.join(__dirname, 'contact.json'),
    'utf8'
  );
  const result = JSON.parse(content);
  return result;
};

async function listContacts() {
  return await readContent();
}

async function getContactById(contactId) {
  const contacts = await readContent();
  return contacts.find((contact) => contact.id === contactId);
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const removeContact = await getContactById(contactId);
  const filteredContacts = contacts.filter(
    (contact) => contact.id !== contactId
  );
  await fs.writeFile(
    path.join(__dirname, 'contact.json'),
    JSON.stringify(filteredContacts, null, 2)
  );
  return removeContact;
}

async function addContact(name, email, phone) {
  const contacts = await readContent();
  const newContact = { id: randomUUID(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(
    path.join(__dirname, 'contact.json'),
    JSON.stringify(contacts, null, 2)
  );
  return newContact;
}

module.exports = { listContacts, getContactById, removeContact, addContact };
