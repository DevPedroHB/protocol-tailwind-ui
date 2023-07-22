import { NavLink } from "./NavLink";
import { Logo } from "./icons/Logo";

const menus = [
  {
    section: "Guides",
    links: [
      "Introduction",
      "Quickstart",
      "SDKs",
      "Authentication",
      "Errors",
      "Webhooks",
    ],
  },
  {
    section: "Resources",
    links: ["Contacts", "Conversations", "Messages", "Groups", "Attachments"],
  },
];

export function Sidebar() {
  return (
    <aside className="border-r border-white/10 w-80 fixed left-0 top-0 bottom-0 p-6">
      <Logo className="text-white h-4 w-auto" />
      <nav className="mt-10 flex flex-col gap-6">
        {menus.map((menu) => (
          <div key={menu.section} className="flex flex-col gap-4">
            <strong className="text-zinc-100 font-medium text-sm">
              {menu.section}
            </strong>
            <div className="text-sm flex flex-col pl-2">
              {menu.links.map((link) => (
                <NavLink href={`/${link.toLocaleLowerCase()}`}>{link}</NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
