
import { LuLayoutDashboard } from "react-icons/lu";
import { 
  MdOutlineInventory2, MdOutlineAddBox, MdPeople, MdOutlineSettings, MdOutlineShoppingCart, 
  MdOutlineAnalytics, MdOutlineNotifications, MdHelpOutline, MdLogout, MdOutlineBarChart, 
  MdOutlineRateReview, MdOutlineReceipt, MdOutlineSubscriptions, MdSupport, MdStarOutline, 
  MdSell, MdOutlineNewReleases, MdPersonAdd, MdOutlineAdminPanelSettings, MdOutlineHistory 
} from "react-icons/md";

export const sidebarBarLinks = [
  {
    id: 1,
    title: "Dashboard",
    url: "/",
    icon: <LuLayoutDashboard />
  },
  {
    id: 2,
    title: "All Products",
    url: "/products/all",
    icon: <MdOutlineInventory2 />
  },
  {
    id: 3,
    title: "Add New",
    url: "/products/add",
    icon: <MdOutlineAddBox />
  },
  {
    id: 4,
    title: "All Users",
    url: "/users/all",
    icon: <MdPeople />
  },
  {
    id: 5,
    title: "Products",
    icon: <MdOutlineInventory2 />,
    subLinks: [
      {
        id: 6,
        title: "My Added Product",
        url: "/products/my-added-products",
        icon: <MdOutlineInventory2 />
      },
      {
        id: 7,
        title: "Featured Products",
        url: "/products/featured",
        icon: <MdStarOutline />
      },
      {
        id: 8,
        title: "Best Sellers",
        url: "/products/best-sellers",
        icon: <MdSell />
      },
      {
        id: 9,
        title: "Discounted Items",
        url: "/products/discounted",
        icon: <MdOutlineNewReleases />
      }
    ]
  },
  {
    id: 10,
    title: "Users",
    icon: <MdPeople />,
    subLinks: [
      {
        id: 11,
        title: "Add New User",
        url: "/users/add",
        icon: <MdPersonAdd />
      },
      {
        id: 12,
        title: "User Roles",
        url: "/users/roles",
        icon: <MdOutlineAdminPanelSettings />
      },
      {
        id: 13,
        title: "User Activity",
        url: "/users/activity",
        icon: <MdOutlineHistory />
      }
    ]
  },
  {
    id: 14,
    title: "Orders",
    url: "/orders",
    icon: <MdOutlineShoppingCart />
  },
  {
    id: 15,
    title: "Settings",
    url: "/settings",
    icon: <MdOutlineSettings />
  },
  {
    id: 16,
    title: "Analytics",
    url: "/analytics",
    icon: <MdOutlineAnalytics />
  },
  {
    id: 17,
    title: "Notifications",
    url: "/notifications",
    icon: <MdOutlineNotifications />
  },
  {
    id: 18,
    title: "Help",
    url: "/help",
    icon: <MdHelpOutline />
  },
  {
    id: 19,
    title: "Log Out",
    url: "/logout",
    icon: <MdLogout />
  },
  {
    id: 20,
    title: "Reports",
    url: "/reports",
    icon: <MdOutlineBarChart />
  },
  {
    id: 21,
    title: "Reviews",
    url: "/reviews",
    icon: <MdOutlineRateReview />
  },
  {
    id: 22,
    title: "Invoices",
    url: "/invoices",
    icon: <MdOutlineReceipt />
  },
  {
    id: 23,
    title: "Subscriptions",
    url: "/subscriptions",
    icon: <MdOutlineSubscriptions />
  },
  {
    id: 24,
    title: "Support",
    url: "/support",
    icon: <MdSupport />
  }
];
