import { BsPencilSquare, BsCardChecklist, BsListCheck } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import { RiContactsBook2Fill } from "react-icons/ri";
import { GiReturnArrow } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { MdOutlinePayment, MdEmail } from "react-icons/md";

export const accountData = [
  {
    url: "/login?redirect=/account/edit-profile/",
    text: "Edit account",
    Icon: <BsPencilSquare size={30} />,
    type: 1,
  },
  {
    url: "/login?redirect=/account/change-password/",
    text: "Change password",
    Icon: <AiFillLock size={30} />,
    type: 1,
  },
  {
    url: "/login?redirect=/account/address",
    text: "Address book",
    Icon: <RiContactsBook2Fill size={30} />,
    type: 0,
  },
  {
    url: "",
    text: "Order history",
    Icon: <BsCardChecklist size={30} />,
    type: 0,
  },
  { url: "", text: "View return", Icon: <GiReturnArrow size={30} />, type: 1 },
  { url: "", text: "Payments", Icon: <MdOutlinePayment size={30} />, type: 1 },
  { url: "", text: "Wishlist", Icon: <BsListCheck size={30} />, type: 1 },
  { url: "", text: "Transaction", Icon: <GrTransaction size={30} />, type: 1 },
  { url: "", text: "Newsletter", Icon: <MdEmail size={30} />, type: 1 },
];

export const accountNavigationData = [
  { url: "/login?redirect=/account", title: "my account" },
  { url: "/login?redirect=/account/address", title: "address book" },
  { url: "/login?redirect=/account/wishlist", title: "wishlist" },
  { url: "/login?redirect=/account/orders", title: "order history" },
  { url: "/login?redirect=/account/returns", title: "returns" },
  { url: "/login?redirect=/account/newsletter", title: "newsletter" },
];

export const address = [
  {
    name: "Ruman Islam",
    address: "3/1, F-Block, Road-8, Rampura Banasree",
    city: "Dhaka 1219",
    country: "Bangladesh",
  },
  {
    name: "Jawad Islam",
    address: "31 South Khilgaon",
    city: "Dhaka 1229",
    country: "Bangladesh",
  },
  {
    name: "Jawad Islam Ruman",
    address: "Banani 1",
    city: "Dhaka 17",
    country: "Bangladesh",
  },
];

export const editAddressFormValues = [
  {
    label: "name",
    type: "text",
    placeholder: "Your name",
    defaultValue: "Ruman Islam",
    requiredMessage: "Please enter name",
  },
  {
    label: "address",
    type: "text",
    placeholder: "Your address",
    defaultValue: "3/1, F-Block, Road-8, Rampura Banasree",
    requiredMessage: "Please enter address",
  },
  {
    label: "city",
    type: "text",
    placeholder: "Your city",
    defaultValue: "Dhaka 1219",
    requiredMessage: "Please enter city",
  },
  {
    label: "country",
    type: "text",
    placeholder: "Your country",
    defaultValue: "Bangladesh",
    requiredMessage: "Please enter country",
  },
];

export const editProfileFormValues = [
  {
    label: "name",
    type: "text",
    placeholder: "Your name",
    defaultValue: "Ruman Islam",
    requiredMessage: "Please enter name",
  },
  {
    label: "email",
    type: "text",
    placeholder: "Your email",
    defaultValue: "3/1, F-Block, Road-8, Rampura Banasree",
    requiredMessage: "Please enter address",
  },
  {
    label: "phone",
    type: "text",
    placeholder: "Your phone",
    defaultValue: "Dhaka 1219",
    requiredMessage: "Please enter phone",
  },
];

export const changePasswordFormValues = [
  {
    label: "current_password",
    type: "password",
    placeholder: "● ● ● ● ● ●",
    defaultValue: "123456",
    requiredMessage: "Please enter current password",
  },
  {
    label: "new_password",
    type: "password",
    placeholder: "● ● ● ● ● ●",
    defaultValue: "123456",
    requiredMessage: "Please enter new password",
  },
];
