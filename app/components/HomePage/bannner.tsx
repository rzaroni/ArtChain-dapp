export default function Banner() {
    return (
        <div className="flex flex-col items-center justify-center p-10 text-neutral lg:flex-row lg:justify-center gap-20 bg-white">
            {/* Texto */}
            <div className="text-center lg:text-left max-w-lg mb-10 lg:mb-0">
                <h1 className="text-4xl font-bold">
                    ArtChain: Uma Plataforma Web3 para a Comunidade Artística
                </h1>
                <p className="mt-4 text-gray-600">
                    ArtChain é uma plataforma Web3 que conecta artistas e estudantes, promovendo a troca de conhecimento e a democratização da arte por meio de tokenização permissionada e tecnologia blockchain.
                </p>
                <button className="mt-6 btn btn-primary">
                    Join Meetup
                </button>
            </div>

            {/* Imagem */}
            <div className="w-full lg:w-auto flex justify-center">
                <img src="https://media-gru1-1.cdn.whatsapp.net/v/t61.24694-24/460357995_548177247874655_6537814048328547224_n.jpg?ccb=11-4&oh=01_Q5AaIIaQdlVaSE8aiZwW7kPR8m93-_3B7gwmlLOKNIhKKJ0b&oe=67123DE0&_nc_sid=5e03e0&_nc_cat=103" alt="People on a bike" className="max-w-full h-auto" />
            </div>
        </div>
    )
}