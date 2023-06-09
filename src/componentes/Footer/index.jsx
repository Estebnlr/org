import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/Footer.png)" }}>
        <div className='redes'>
            <a href='https://org-one-mu.vercel.app/'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://org-one-mu.vercel.app/'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://org-one-mu.vercel.app/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
       
        <strong>Desarrollado por Manuel Lucero</strong>
    </footer>
}

export default Footer