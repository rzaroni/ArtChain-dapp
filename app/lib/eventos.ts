import { format } from 'date-fns';
const currentDate = new Date();
const nextWeek = new Date(currentDate);
nextWeek.setDate(currentDate.getDate() + 7);

const formatDate = (date: Date) => format(date, "dd/MM/yyyy");

const basepath = "https://assets.zyrosite.com/AVL3ex1eDKUp9aqq/";
const basepathII = "https://ipfs.io/ipfs/";


export interface Event {
    id: number;
    title: string;
    date: string;
    location: string;
    category: string;
    imageUrl: string;
    onClick?: () => void;
}

export const mockUserEvents: Event[] = [
    {
        id: 101,
        title: "ArtChain Pitch",
        date: formatDate(currentDate),
        location: "Online",
        category: "Competição",
        imageUrl: basepath + "art13-mxBZxEEzgaT7P9ZK.jpg",
    },
    {
        id: 102,
        title: "ArtChain Workshop",
        date: formatDate(nextWeek),
        location: "Online",
        category: "Competição",
        imageUrl: basepath + "art16-m7VwEqqqayhPpMrl.jpg",
    },
];

export const dummyEvents: Event[] = [
    {
        id: 1,
        title: "Exposição de NFTArt",
        date: formatDate(currentDate),
        location: "Rio de Janeiro",
        category: "Arte",
        imageUrl:	basepath + "art8-YNqyX99DG4u6Qz4n.jpg",
    },
    {
        id: 2,
        title: "Sinfonia Digital",
        date: formatDate(nextWeek),
        location: "São Paulo",
        category: "Música",
        imageUrl:	basepath + "art14-d95KEWWW47CVQVD5.jpg",
    },
    {
        id: 3,
        title: "Exposição de Fotos",
        date: "2024-10-01",
        location: "Belo Horizonte",
        category: "Fotografia",
        imageUrl:	basepath + "art2-mxBZxEExbptrRyzJ.jpg",
    },
    {
        id: 4,
        title: "Abertura da Galeria de Arte",
        date: "2024-07-20",
        location: "Rio de Janeiro",
        category: "Arte",
        imageUrl:	basepathII + "QmRfiGAx61bwY3oEgpn3pD2ANmhCuLJTsaw2ANDVut25H5",
    },
    {
        id: 5,
        title: "ArtChain Hackathon",
        date: "2024-11-10",
        location: "Rio de Janeiro",
        category: "Arte",
        imageUrl:	basepathII + "QmSYAVEVNK8UfPayJr1y3N6sMPALvRgecv5RxxKKeSQzNq",
    },
    {
        id: 6,
        title: "Workshop de Artes",
        date: "2024-09-15",
        location: "Petrópolis",
        category: "Arte",
        imageUrl:	basepathII + "QmXgQvoGhAwZxknBFWk1ZYKcLiNbvqP8TV2qSGviPLgTU7",
    },
    {
        id: 7,
        title: "Exposição de Fotos",
        date: "2024-08-30",
        location: "Curitiba",
        category: "Fotografia",
        imageUrl:	basepathII + "QmZBCNNGbsfPQLoGLtc7Kjce7uRKeGZ8HDAsBLLfPnt8Xr",
    },
    {
        id: 8,
        title: "Digital Artweek",
        date: "2024-10-20",
        location: "Salvador",
        category: "Arte",
        imageUrl:	basepathII + "QmZhhets6FMRgeQLzVcuHxDYE766wyChYZz8Z45ueXwChA",
    },
    {
        id: 9,
        title: "Visita ao Teatro Municipal",
        date: formatDate(currentDate),
        location: "Rio de Janeiro",
        category: "Teatro",
        imageUrl:	basepathII + "QmUtJndfmhT5RCmx2H2q7q5hUurANspGrQpSwzCoYFEVTj",
    },
    {
        id: 10,
        title: "Blockchain Week",
        date: formatDate(nextWeek),
        location: "Online",
        category: "Internacional",
        imageUrl:	basepathII + "QmSEbFUf9Z7PutJpqkdMwHyXyczCYZWsSqmq3bsRttrBER",
    },
];