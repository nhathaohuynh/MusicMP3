import icon from "./icon";
const { MdOutlineLibraryMusic,SiYoutubemusic,GiChart,RiDvdLine,BiNews} = icon;
const menuSideBarLeft = [
  {
    path: "mymusic",
    text: "Cá Nhân",
    icon: <MdOutlineLibraryMusic size={24}></MdOutlineLibraryMusic>,
    end:true
  },
  {
    path: "",
    text: "Khám Phá",
    icon: <SiYoutubemusic size={24}></SiYoutubemusic>,
    end:true
  },
  {
    path: "zing-chart",
    text: "#zingchart",
    icon: <GiChart size={24}></GiChart>,
    end:true
  },
  {
    path: "radio",
    text: "Radio",
    icon: <RiDvdLine size={24}></RiDvdLine>,
    end:true
  },
  {
    path: "follow",
    text: "Theo Dõi",
    icon: <BiNews size={24}></BiNews>,
    end:true
  },
];

export default menuSideBarLeft;
