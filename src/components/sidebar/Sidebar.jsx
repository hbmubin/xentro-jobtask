import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "../../assets/logo.png";
import profileImg from "../../assets/user-man.png";
import sadeBarLinks from "../../../public/links.json";
import { NavLink } from "react-router-dom";
import { Accordion, AccordionBody, AccordionHeader, Chip, List, ListItem, ListItemPrefix, ListItemSuffix, Typography } from "@material-tailwind/react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <aside className="w-80 h-screen">
      <figure className="w-52 py-6  px-6">
        <LazyLoadImage className="max-w-full" src={logo} alt="xentro-logo" />
      </figure>
      <div className="overflow-auto h-full sidebar-scroll  px-6">
        <div className="flex items-center p-3 bg-white rounded-md gap-4">
          <figure className="size-10 rounded-full overflow-hidden ring-1 ring-orange-200">
            <LazyLoadImage className="object-cover w-full" src={profileImg} alt="profile" />
          </figure>
          <div className="flex flex-col">
            <span className="font-semibold text-orange-500">Hasanul Banna Mubin</span>
            <span className="text-sm text-neutral-600">Admin</span>
          </div>
        </div>
        <nav>
          <List className="mt-6 mb-28">
            {sadeBarLinks.map((link, idx) =>
              link.subLinks ? (
                <Accordion key={link.id} open={open === idx} icon={<ChevronDownIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 transition-transform ${open === idx ? "rotate-180" : ""}`} />}>
                  <ListItem className="p-0" selected={open === idx}>
                    <AccordionHeader onClick={() => handleOpen(idx)} className="border-b-0 p-3">
                      <Typography className="mr-auto font-normal">
                        {link.title}
                      </Typography>
                    </AccordionHeader>
                  </ListItem>
                  <AccordionBody className="py-1">
                    <List className="pl-3">
                      {link.subLinks.map((subLink, idx) => (
                        <ListItem className="p-0  rounded-md overflow-hidden" key={subLink.id}>
                          <NavLink className="inline-block w-full h-full p-3" to={subLink.url}>{subLink.title}</NavLink>
                        </ListItem>
                      ))}
                    </List>
                  </AccordionBody>
                </Accordion>
              ) : (
                <ListItem className="p-0" key={link.id}>
                  <NavLink className="inline-block w-full h-full p-3" to={link.url}>{link.title}</NavLink>
                </ListItem>
              )
            )}
          </List>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
