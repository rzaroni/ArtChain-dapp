import { format } from 'date-fns';

const currentDate = new Date();
const nextWeek = new Date(currentDate.setDate(currentDate.getDate() + 7));

const formatDate = (date: Date) => format(date, "yyyy-MM-dd");

export interface Event {
    id: number;
    title: string;
    date: string;
    location: string;
    category: string;
    imageUrl: string;
}

export const mockUserEvents: Event[] = [
    {
        id: 101,
        title: "ArtChain Pitch",
        date: formatDate(currentDate),
        location: "Online",
        category: "Competição",
        imageUrl:
            "https://ifpr.edu.br/irati/wp-content/uploads/sites/14/2024/04/concurso-de-artes-visuais-do-ifpr-irati.jpg",
    },
    {
        id: 102,
        title: "ArtChain Workshop",
        date: formatDate(nextWeek),
        location: "Online",
        category: "Competição",
        imageUrl:
            "https://ifpr.edu.br/irati/wp-content/uploads/sites/14/2024/04/concurso-de-artes-visuais-do-ifpr-irati.jpg",
    },
];

export const dummyEvents: Event[] = [
    {
        id: 1,
        title: "Exposição de NFTArt",
        date: formatDate(currentDate),
        location: "Rio de Janeiro",
        category: "Arte",
        imageUrl:
            "https://www.infura.io/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6g6hg01fg28j%2FKFPYuRLDjMt5LBDcfzWMU%2F04ecf96366ef87c4f5f3dee724089175%2Fdet-bg.png&w=1080&q=75",
    },
    {
        id: 2,
        title: "Sinfonia Digital",
        date: formatDate(nextWeek),
        location: "São Paulo",
        category: "Música",
        imageUrl:
            "https://www.infura.io/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6g6hg01fg28j%2FKFPYuRLDjMt5LBDcfzWMU%2F04ecf96366ef87c4f5f3dee724089175%2Fdet-bg.png&w=1080&q=75",
    },
    {
        id: 3,
        title: "Exposição de Fotos",
        date: "2024-10-01",
        location: "Belo Horizonte",
        category: "Fotografia",
        imageUrl:
            "https://www.infura.io/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6g6hg01fg28j%2FKFPYuRLDjMt5LBDcfzWMU%2F04ecf96366ef87c4f5f3dee724089175%2Fdet-bg.png&w=1080&q=75",
    },
    {
        id: 4,
        title: "Abertura da Galeria de Arte",
        date: "2024-07-20",
        location: "Rio de Janeiro",
        category: "Arte",
        imageUrl:
            "https://www.infura.io/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6g6hg01fg28j%2FKFPYuRLDjMt5LBDcfzWMU%2F04ecf96366ef87c4f5f3dee724089175%2Fdet-bg.png&w=1080&q=75",
    },
    {
        id: 5,
        title: "ArtChain Hackathon",
        date: "2024-11-10",
        location: "Rio de Janeiro",
        category: "Arte",
        imageUrl:
            "https://www.infura.io/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6g6hg01fg28j%2FKFPYuRLDjMt5LBDcfzWMU%2F04ecf96366ef87c4f5f3dee724089175%2Fdet-bg.png&w=1080&q=75",
    },
    {
        id: 6,
        title: "Workshop de Artes",
        date: "2024-09-15",
        location: "Petrópolis",
        category: "Arte",
        imageUrl:
            "https://www.infura.io/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6g6hg01fg28j%2FKFPYuRLDjMt5LBDcfzWMU%2F04ecf96366ef87c4f5f3dee724089175%2Fdet-bg.png&w=1080&q=75",
    },
    {
        id: 7,
        title: "Exposição de Fotos",
        date: "2024-08-30",
        location: "Curitiba",
        category: "Fotografia",
        imageUrl:
            "https://www.infura.io/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6g6hg01fg28j%2FKFPYuRLDjMt5LBDcfzWMU%2F04ecf96366ef87c4f5f3dee724089175%2Fdet-bg.png&w=1080&q=75",
    },
    {
        id: 8,
        title: "Digital Artweek",
        date: "2024-10-20",
        location: "Salvador",
        category: "Arte",
        imageUrl:
            "https://www.infura.io/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6g6hg01fg28j%2FKFPYuRLDjMt5LBDcfzWMU%2F04ecf96366ef87c4f5f3dee724089175%2Fdet-bg.png&w=1080&q=75",
    },
    {
        id: 9,
        title: "Visita ao Teatro Municipal",
        date: formatDate(currentDate),
        location: "Rio de Janeiro",
        category: "Teatro",
        imageUrl:
            "https://www.infura.io/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6g6hg01fg28j%2FKFPYuRLDjMt5LBDcfzWMU%2F04ecf96366ef87c4f5f3dee724089175%2Fdet-bg.png&w=1080&q=75",
    },
    {
        id: 10,
        title: "Blockchain Week",
        date: formatDate(nextWeek),
        location: "Online",
        category: "Internacional",
        imageUrl:
            "https://www.infura.io/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6g6hg01fg28j%2FKFPYuRLDjMt5LBDcfzWMU%2F04ecf96366ef87c4f5f3dee724089175%2Fdet-bg.png&w=1080&q=75",
    },
];