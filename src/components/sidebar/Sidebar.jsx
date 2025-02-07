import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "../../assets/logo.png";
import profileImg from "../../assets/user-man.png";
import { NavLink } from "react-router-dom";
import { Accordion, AccordionBody, AccordionHeader, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useContext, useState } from "react";
import { FuncContext } from "../../provider/FuncProvider";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { sidebarBarLinks } from "../../links";
import useWidth from "../../hooks/useWidth";

const Sidebar = () => {
  const [open, setOpen] = useState(0);
  const isSmall = useWidth()
  // console.log(isSmall)

  const { hideBar, setHideBar } = useContext(FuncContext);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <aside className={`${hideBar ? "w-0" : "sm:w-80 w-full"} duration-300 lg:static fixed overflow-hidden text-nowrap h-screen shadow dark:bg-slate-800 z-40 bg-white`}>
      <div className="py-4 flex justify-between items-center">
        <figure className="w-44 pl-6">
          <img className="max-w-full" src={logo} alt="xentro-logo" />
        </figure>
        <button
          className="text-neutral-500 border rounded-md p-1 mr-6 dark:border-slate-700 dark:bg-slate-900 dark:active:bg-gray-700 border-neutral-300 cursor-pointer active:bg-neutral-200 hover:bg-neutral-200 duration-100 active:scale-95 dark:hover:bg-slate-800"
          onClick={() => setHideBar(true)}
        >
          <MdOutlineKeyboardDoubleArrowLeft size={24} />
        </button>
      </div>
      <div className="overflow-auto h-full sidebar-scroll  px-6">
        <div className="flex items-center p-3 bg-bgGray dark:bg-slate-900 rounded-xl gap-4">
          <figure className="size-10 rounded-full overflow-hidden ring-1 ring-orange-200 dark:ring-slate-700">
            <img className="object-cover w-full" src={profileImg} alt="profile" />
          </figure>
          <div className="flex flex-col">
            <span className="font-semibold text-orange-500 dark:text-orange-200">Hasanul Banna Mubin</span>
            <span className="text-sm text-neutral-500">Admin</span>
          </div>
        </div>
        <nav>
          <List className="mt-6 mb-28 dark:text-neutral-300">
            {sidebarBarLinks.map((link, idx) =>
              link.subLinks ? (
                <Accordion key={link.id} open={open === idx} icon={<ChevronDownIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 transition-transform ${open === idx ? "rotate-180" : ""}`} />}>
                  <ListItem className="p-0 " selected={open === idx}>
                    <AccordionHeader onClick={() => handleOpen(idx)} className="border-b-0 p-3">
                    <ListItemPrefix>{link.icon}</ListItemPrefix>
                      <Typography className="mr-auto font-normal">{link.title}</Typography>
                    </AccordionHeader>
                  </ListItem>
                  <AccordionBody className="py-1">
                    <List className="pl-3">
                      {link.subLinks.map((subLink, idx) => (
                        <NavLink
                        onClick={()=>{isSmall && setHideBar(true)}}
                          key={subLink.id}
                          className="inline-block dark:text-neutral-300 rounded-md overflow-hidden w-full h-full hover:text-orange-500 dark:hover:text-blue-500 duration-200"
                          to={subLink.url}
                        >
                          <ListItem className="p-3 ">
                          <ListItemPrefix>{subLink.icon}</ListItemPrefix>
                            {subLink.title}</ListItem>
                        </NavLink>
                      ))}
                    </List>
                  </AccordionBody>
                </Accordion>
              ) : (
                <NavLink
                onClick={()=>{isSmall && setHideBar(true)}}
                  key={link.id}
                  className="inline-block rounded w-full h-full hover:text-orange-500 overflow-hidden dark:hover:text-blue-500 duration-200 dark:text-neutral-300"
                  to={link.url}
                >
                  <ListItem className="p-3 h-full w-full">
                    <ListItemPrefix>{link.icon}</ListItemPrefix>
                    {link.title}
                  </ListItem>
                </NavLink>
              )
            )}
          </List>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
