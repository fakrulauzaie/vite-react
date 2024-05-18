import { 
    Outlet,
    Link,
    useLoaderData,
    Form,
} from "react-router-dom";
import { getContacts, createContact } from "../api/contacts";

export async function action() {
    const contact = await createContact();
    return { contact };
  }
  
export async function loader() {
    const contacts = await getContacts();
    return { contacts };
  }

export default function Contacts() {
    const { contacts } = useLoaderData();
    return (
      <>
        <div>
          <h1>WOW</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <Form method="post">
              <button type="submit">New</button>
            </Form>
          </div>

          <div>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link to={`/page/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </div>
        </div>
        <div id="detail">
            <Outlet />
        </div>
      </>
    );
  }