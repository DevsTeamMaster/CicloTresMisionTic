import CardRazasPerros from 'components/CardRazasPerros';
import borderCollie from 'media/borderCollie.jpg';
import rhodesian from 'media/rhodesian.jpg';
import Header from 'components/Header';
import Footer from 'components/Footer';

function Index() {
  return (
    <section>
      <Header/>
      <h1>Razas de Perros</h1>
      <ul className='breedCardContainer'>
        <CardRazasPerros nombreRaza='Border Collie' imagen={borderCollie} />
        <CardRazasPerros nombreRaza='Rhodesian' imagen={rhodesian} />
        <CardRazasPerros nombreRaza='Rhodesian' imagen={rhodesian} />
        <CardRazasPerros nombreRaza='Rhodesian' imagen={rhodesian} />
        <CardRazasPerros nombreRaza='Rhodesian' imagen={rhodesian} />
        <CardRazasPerros nombreRaza='Rhodesian' imagen={rhodesian} />
      </ul>
      <Footer/>
    </section>
  );
}

export default Index;
