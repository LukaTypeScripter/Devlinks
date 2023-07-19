import arrowRigth from './icon-arrow-right.svg'
import changesSaved from './icon-changes-saved.svg'
import cheveronDown from './icon-chevron-down.svg'
import codepen from './icon-codepen.svg'
import codepenGray from './icon-codepen-gray.svg'
import codeWarsGray from './icon-codewars-gray.svg'
import codeWars from './icon-codewars.svg'
import devtoGray from './icon-devto-gray.svg'
import devto from './icon-devto.svg'
import dragAndDrop from './icon-drag-and-drop.svg'
import email from './icon-email.svg'
import facebookGray from './icon-facebook-gray.svg'
import facebook from './icon-facebook.svg'
import freecodecampGray from './icon-freecodecamp-gray.svg'
import freecodecamp from './icon-freecodecamp.svg'
import githubGray from './icon-github-gray.svg'
import github from './icon-github.svg'
import gitlabGray from './icon-gitlab-gray.svg'
import gitlab from './icon-gitlab.svg'
import hashnodeGray from './icon-hashnode-gray.svg'
import hashnode from './icon-hashnode.svg'
import copiedClipboard from './icon-link-copied-to-clipboard.svg'
import link from './icon-link.svg'
import linkidnGray from './icon-linkedin-gray.svg'
import linkidn from './icon-linkedin.svg'
import iconHeaderLinks from './icon-links-header.svg'
import iconPassword from './icon-password.svg'
import previewHeader from './icon-preview-header.svg'
import profileDetailsHeader from './icon-profile-details-header.svg'
import stackGray from './icon-stack-overflow-gray.svg'
import stack from './icon-stack-overflow.svg'
import twitchGray from './icon-twitch-gray.svg'
import twitch from './icon-twitch.svg'
import twitterGray from './icon-twitch-gray.svg'
import twitter from './icon-twitter.svg'
import uploadImage from './icon-upload-image.svg'
import youtubeGray from './icon-youtube-gray.svg'
import youtube from './icon-youtube.svg'
import ilustrationEmty from './illustration-empty.svg'
import phoneMockup from './illustration-phone-mockup.svg'
import logoLarge from './logo-devlinks-large.svg'
import logoSmall from './logo-devlinks-small.svg'
import placeholderimage from './placeholder-image.png'
const randomId = function(length:number) {
    return Math.random().toString(36).substring(2, length+2);
  };
export const iconsData = [
    { name: 'codepen', icon: codepen, id: randomId(6) },
    { name: 'Codewars', icon: codeWars, id: randomId(11) },
    { name: 'Facebook', icon: facebook, id: randomId(10) },
    { name: 'freeCodeCamp', icon: freecodecamp, id: randomId(10) },
    { name: 'Github', icon: github, id: randomId(10)},
    { name: 'GitLab', icon: gitlab, id: randomId(10) },
    { name: 'Hashnode', icon: hashnode, id: randomId(10) },
    { name: 'Youtube', icon: youtube, id: randomId(10) },
    { name: 'Twitter', icon: twitter, id:randomId(10) },
    { name: 'Twitch', icon: twitch, id: randomId(10)},
    { name: 'Stack Overflow', icon: stack, id: randomId(10) },
    { name: 'LinkedIn', icon: linkidn, id: randomId(10) },
  ];
  interface Colors {
    [key: string]: string;
  }
  export const colors:Colors = {
    'Github': '#1A1A1A',
    'Frontend Mentor': '#FFF',
    'Twitter': '#43B7E9',
    'LinkedIn': '#2D68FF',
    'Youtube': '#EE3939',
    'Facebook': '#2442AC',
    'Twitch': '#9146ff',
    'Dev.to': '#333',
    'Codewars': '#8A1A50',
    'freeCodeCamp': '#302267',
    'GitLab': '#EB4925',
    'Hashnode': '#0330D1',
    'Stack Overflow': '#EC7100',
  }
 
export {
    link,
    codeWars,
    codepen,
    codepenGray,
    codeWarsGray,
    devtoGray,
    devto,
    dragAndDrop,
    email,
    facebookGray,
    facebook,
    freecodecampGray,
    freecodecamp,
    githubGray,
    github,
    gitlabGray,
    gitlab,
    hashnode,
    hashnodeGray,
    copiedClipboard,
    cheveronDown,
    arrowRigth,
    changesSaved,
    logoSmall,
    logoLarge,
    phoneMockup,
    ilustrationEmty,
    youtube,
    youtubeGray,
    uploadImage,
    twitch,
    twitterGray,
    twitter,
    twitchGray,
    stack,
    stackGray,
    profileDetailsHeader,
    previewHeader,
    iconPassword,
    iconHeaderLinks,
    linkidn,
    linkidnGray,
    placeholderimage
}



