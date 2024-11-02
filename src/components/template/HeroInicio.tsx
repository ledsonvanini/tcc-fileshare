
import useAppData from '@/data/hook/useAppData'

export default function HeroInicio() {
    const { tema } = useAppData()
    return (
        <section className={`${tema}`}>
            <div className="flex flex-col gap-4 mx-auto max-w-screen-lg px-4 py-32 lg:flex  lg:items-center">
                <div className="flex flex-col gap-6 mx-auto max-w-3xl text-center">
                    <h1 className="flex flex-col gap-4 text-4xl font-extrabold sm:text-5xl">
                        Gerencie seus arquivos com segurança
                        <span className="text-3xl text-zinc-900 sm:block"> Desbloqueie o poder da nuvem </span>
                    </h1>

                    <p className="text-4xl mt-4 sm:text-xl/relaxed">
                        É <strong>grátis</strong> e prático. Não perca tempo, comece agora mesmo!
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded bg-zinc-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                            href="/upload"
                        >
                            Comece Aqui
                        </a>

                        <a
                            className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                            href="#"
                        >
                            Saiba Mais
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}