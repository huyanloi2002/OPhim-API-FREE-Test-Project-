import {
  FaHeart,
  FaLaugh,
  FaHistory,
  FaBrain,
  FaFilm,
  FaFistRaised,
  FaUserSecret,
  FaTheaterMasks,
  FaMusic,
  FaDragon,
  FaHome,
  FaSchool,
  FaStar,
  FaPaw,
} from "react-icons/fa";
import {
  GiWarPick,
  GiSoccerBall,
  GiCompass,
  GiMicroscope,
  GiGhost,
} from "react-icons/gi";
import { MdOutlineSportsMartialArts, MdDocumentScanner } from "react-icons/md";

const categories = [
  { name: "Hành động", key: "action", key_vn: "hanh-dong", icon: FaFistRaised },
  { name: "Tình cảm", key: "romance", key_vn: "tinh-cam", icon: FaHeart },
  { name: "Hài hước", key: "comedy", key_vn: "hai-huoc", icon: FaLaugh },
  { name: "Cổ trang", key: "historical", key_vn: "co-trang", icon: FaHistory },
  { name: "Tâm lý", key: "drama", key_vn: "tam-ly", icon: FaBrain },
  { name: "Hình sự", key: "crime", key_vn: "hinh-su", icon: FaUserSecret },
  { name: "Chiến tranh", key: "war", key_vn: "chien-tranh", icon: GiWarPick },
  { name: "Thể thao", key: "sports", key_vn: "the-thao", icon: GiSoccerBall },
  {
    name: "Võ thuật",
    key: "martial_arts",
    key_vn: "vo-thuat",
    icon: MdOutlineSportsMartialArts,
  },
  { name: "Phiêu lưu", key: "adventure", key_vn: "phieu-luu", icon: GiCompass },
  { name: "Khoa học", key: "science", key_vn: "khoa-hoc", icon: GiMicroscope },
  { name: "Kinh dị", key: "horror", key_vn: "kinh-di", icon: GiGhost },
  { name: "Âm nhạc", key: "music", key_vn: "am-nhac", icon: FaMusic },
  {
    name: "Thần thoại",
    key: "mythology",
    key_vn: "than-thoai",
    icon: FaDragon,
  },
  {
    name: "Tài liệu",
    key: "documentary",
    key_vn: "tai-lieu",
    icon: MdDocumentScanner,
  },
  { name: "Gia đình", key: "family", key_vn: "gia-dinh", icon: FaHome },
  {
    name: "Chính kịch",
    key: "drama",
    key_vn: "chinh-kich",
    icon: FaTheaterMasks,
  },
  { name: "Bí ẩn", key: "mystery", key_vn: "bi-an", icon: FaFilm },
  { name: "Học đường", key: "school", key_vn: "hoc-duong", icon: FaSchool },
  { name: "Kinh điển", key: "classic", key_vn: "kinh-dien", icon: FaStar },
  { name: "Phim 18+", key: "adult", key_vn: "phim-18", icon: FaPaw },
];

const countries = [
  {
    name: "Trung Quốc",
    key: "china",
    key_vn: "trung-quoc",
    link_flag: "https://flagcdn.com/cn.svg",
  },
  {
    name: "Hàn Quốc",
    key: "korea",
    key_vn: "han-quoc",
    link_flag: "https://flagcdn.com/kr.svg",
  },
  {
    name: "Nhật Bản",
    key: "japan",
    key_vn: "nhat-ban",
    link_flag: "https://flagcdn.com/jp.svg",
  },
  {
    name: "Thái Lan",
    key: "thailand",
    key_vn: "thai-lan",
    link_flag: "https://flagcdn.com/th.svg",
  },
  {
    name: "Âu Mỹ",
    key: "western",
    key_vn: "au-my",
    link_flag: "https://flagcdn.com/us.svg",
  },
  {
    name: "Đài Loan",
    key: "taiwan",
    key_vn: "dai-loan",
    link_flag: "https://flagcdn.com/tw.svg",
  },
  {
    name: "Hồng Kông",
    key: "hongkong",
    key_vn: "hong-kong",
    link_flag: "https://flagcdn.com/hk.svg",
  },
  {
    name: "Ấn Độ",
    key: "india",
    key_vn: "an-do",
    link_flag: "https://flagcdn.com/in.svg",
  },
  {
    name: "Anh",
    key: "uk",
    key_vn: "anh",
    link_flag: "https://flagcdn.com/gb.svg",
  },
  {
    name: "Pháp",
    key: "france",
    key_vn: "phap",
    link_flag: "https://flagcdn.com/fr.svg",
  },
  {
    name: "Quốc gia khác",
    key: "other-countries",
    key_vn: "quoc-gia-khac",
    link_flag: "https://flagcdn.com/un.svg",
  },
  {
    name: "Đức",
    key: "germany",
    key_vn: "duc",
    link_flag: "https://flagcdn.com/de.svg",
  },
  {
    name: "Tây Ban Nha",
    key: "spain",
    key_vn: "tay-ban-nha",
    link_flag: "https://flagcdn.com/es.svg",
  },
  {
    name: "Thỗ Nhĩ Kỳ",
    key: "turkey",
    key_vn: "tho-nhi-ky",
    link_flag: "https://flagcdn.com/tr.svg",
  },
  {
    name: "Hà Lan",
    key: "netherlands",
    key_vn: "ha-lan",
    link_flag: "https://flagcdn.com/nl.svg",
  },
  {
    name: "Indonesia",
    key: "indonesia",
    key_vn: "indonesia",
    link_flag: "https://flagcdn.com/id.svg",
  },
  {
    name: "Nga",
    key: "russia",
    key_vn: "nga",
    link_flag: "https://flagcdn.com/ru.svg",
  },
  {
    name: "Mexico",
    key: "mexico",
    key_vn: "mexico",
    link_flag: "https://flagcdn.com/mx.svg",
  },
  {
    name: "Ba Lan",
    key: "poland",
    key_vn: "ba-lan",
    link_flag: "https://flagcdn.com/pl.svg",
  },
  {
    name: "Úc",
    key: "australia",
    key_vn: "uc",
    link_flag: "https://flagcdn.com/au.svg",
  },
  {
    name: "Thụy Điển",
    key: "sweden",
    key_vn: "thuy-dien",
    link_flag: "https://flagcdn.com/se.svg",
  },
  {
    name: "Malaysia",
    key: "malaysia",
    key_vn: "malaysia",
    link_flag: "https://flagcdn.com/my.svg",
  },
  {
    name: "Brazil",
    key: "brazil",
    key_vn: "brazil",
    link_flag: "https://flagcdn.com/br.svg",
  },
  {
    name: "Philippines",
    key: "philippines",
    key_vn: "philippines",
    link_flag: "https://flagcdn.com/ph.svg",
  },
  {
    name: "Bồ Đào Nha",
    key: "portugal",
    key_vn: "bo-dao-nha",
    link_flag: "https://flagcdn.com/pt.svg",
  },
  {
    name: "Ý",
    key: "italy",
    key_vn: "y",
    link_flag: "https://flagcdn.com/it.svg",
  },
  {
    name: "Đan Mạch",
    key: "denmark",
    key_vn: "dan-mach",
    link_flag: "https://flagcdn.com/dk.svg",
  },
  {
    name: "UAE",
    key: "uae",
    key_vn: "uae",
    link_flag: "https://flagcdn.com/ae.svg",
  },
  {
    name: "Na Uy",
    key: "norway",
    key_vn: "na-uy",
    link_flag: "https://flagcdn.com/no.svg",
  },
  {
    name: "Thụy Sĩ",
    key: "switzerland",
    key_vn: "thuy-si",
    link_flag: "https://flagcdn.com/ch.svg",
  },
  {
    name: "Châu Phi",
    key: "africa",
    key_vn: "chau-phi",
    link_flag: "https://flagcdn.com/af.svg",
  },
  {
    name: "Nam Phi",
    key: "south-africa",
    key_vn: "nam-phi",
    link_flag: "https://flagcdn.com/za.svg",
  },
  {
    name: "Ukraina",
    key: "ukraine",
    key_vn: "ukraina",
    link_flag: "https://flagcdn.com/ua.svg",
  },
  {
    name: "Ả Rập Xê Út",
    key: "saudi-arabia",
    key_vn: "a-rap-xe-ut",
    link_flag: "https://flagcdn.com/sa.svg",
  },
];

const years = [
  { name: 2024, key: "2024", key_vn: "2024" },
  { name: 2023, key: "2023", key_vn: "2023" },
  { name: 2022, key: "2022", key_vn: "2022" },
  { name: 2021, key: "2021", key_vn: "2021" },
  { name: 2020, key: "2020", key_vn: "2020" },
  { name: 2019, key: "2019", key_vn: "2019" },
  { name: 2018, key: "2018", key_vn: "2018" },
  { name: 2017, key: "2017", key_vn: "2017" },
  { name: 2016, key: "2016", key_vn: "2016" },
  { name: 2015, key: "2015", key_vn: "2015" },
  { name: 2014, key: "2014", key_vn: "2014" },
  { name: 2013, key: "2013", key_vn: "2013" },
  { name: 2012, key: "2012", key_vn: "2012" },
  { name: 2011, key: "2011", key_vn: "2011" },
  { name: 2010, key: "2010", key_vn: "2010" },
];

const status_movie = [
  { name: "Đang chiếu", key: "ongoing", key_vn: "phim-dang-chieu" },
  { name: "Sắp chiếu", key: "completed", key_vn: "phim-sap-chieu" },
  { name: "Đã chiếu", key: "trailer", key_vn: "phim-da-chieu" },
];

const sub_movie = [
  { name: "Vietsub", key: "Vietsub", key_vn: "Vietsub" },
  { name: "Thuyết minh", key: "Thuyết Minh", key_vn: "Thuyết Minh" },
  { name: "Lồng tiếng", key: "Lồng Tiếng", key_vn: "Lồng Tiếng" },
];

const type_movie = [
  { name: "Phim bộ", key: "series", key_vn: "phim-bo" },
  { name: "Phim lẻ", key: "single", key_vn: "phim-le" },
  { name: "Hoạt hình", key: "hoathinh", key_vn: "hoat-hinh" },
  { name: "TV Shows", key: "tvshows", key_vn: "tv-shows" },
];

export { type_movie, categories, countries, years, status_movie, sub_movie };
