import EmailInput from "../../components/EmailInput";
import LinkedIn from "../../Icons/Icon-Linkedin.png"
import Instagram from "../../Icons/icon-instagram.png"
import Facebook from "../../Icons/Icon-Facebook.png"
import AppStore from "../../Icons/AppStore.png"
import Twitter from "../../Icons/Icon-Twitter.png"
import Googleplay from "../../Icons/GooglePlay.png"


const Text = ({ text }) => {
    return <div className="text-xl mb-[24px]">{text}</div>;
};
const footerdata = {
    sections: [
        {
            title: "Exclusive",
            content: [
                { text: <Text text="Subscribe" /> },
                { text: "Get 10% off your first order" },
                { text: <EmailInput /> },
            ],
        },
        {
            title: "Support",
            content: [
                { text: "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh." },
                { text: "exclusive@gmail.com" },
                { text: "+88015-88888-9999" },
            ],
        },
        {
            title: "Account",
            content: [
                { text: "My Account", url: "/my-account" },
                { text: "Login / Register", url: "/login" },
                { text: "Cart", url: "/cart" },
                { text: "Wishlist", url: "/wishlist" },
                { text: "Shop", url: "/shop" },
            ],
        },
        {
            title: "Quick Link",
            content: [
                { text: "Privacy Policy", url: "/privacy-policy" },
                { text: "Terms Of Use", url: "/terms-of-use" },
                { text: "FAQ", url: "/faq" },
                { text: "Contact", url: "/contact" },
            ],
        },
    ],
    downloadApp: {
        text: "Save $3 with App New User Only",
        images: [
            { src: Googleplay, alt: "Google Play" },
            { src: AppStore, alt: "App Store" },
        ],
        socials: [
            { name: "Facebook", link: "#", icon: Facebook },
            { name: "Twitter", link: "#", icon: Twitter },
            { name: "Instagram", link: "#", icon: Instagram },
            { name: "LinkedIn", link: "#", icon: LinkedIn },
        ],
    },
};
export default footerdata;
