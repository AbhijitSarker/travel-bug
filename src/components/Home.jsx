import React, { useEffect, useState } from 'react';
import backgroundImage from '../assets/images/hero.png';
import './Home.css'
import Hero from './Hero';
const Home = () => {

    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetch('https://travel-bug-server-abhijitsarker.vercel.app/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, [])

    return (
        <div className='text-black text-center'>

            <Hero></Hero>

            <div className='absolute top-full'>
                <h1>hello</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, tempore ex quos dignissimos deleniti dolorum possimus inventore odio quasi. Incidunt, harum! Fuga inventore, suscipit, sed adipisci reprehenderit reiciendis modi quam fugiat voluptatem veritatis ut, cupiditate consequuntur quaerat officiis perspiciatis labore molestias similique! Natus obcaecati nam officiis quo porro enim quasi minus ea voluptates, doloremque vitae, quibusdam nesciunt. Saepe dicta architecto hic eum incidunt fuga neque ad natus mollitia illum modi tenetur similique expedita minima aut, nobis, esse eligendi sed error porro beatae veniam minus. Veniam consectetur tenetur at accusantium placeat! Minus sed, tenetur maiores inventore magnam deserunt! Soluta maxime non natus nemo expedita est odit illum corrupti, cumque possimus iure numquam, repellendus perferendis beatae id sed ut, itaque inventore architecto cum. Illum, enim saepe architecto mollitia aliquam minus molestiae quam quaerat iste labore eligendi aperiam impedit quisquam laborum facere facilis accusamus asperiores repellendus? Suscipit, delectus eius nostrum distinctio corrupti architecto. Porro magnam quaerat ea sapiente saepe iusto fuga doloribus? Provident tempore a accusantium modi aut doloremque nulla, sit harum corporis corrupti culpa magnam? Culpa nihil deserunt nulla a aperiam ut eaque doloremque optio. Repellat molestias quas consectetur distinctio. Adipisci cupiditate, nemo consequatur molestiae, quo illo nihil, doloribus dicta voluptates minima quis ipsam recusandae? Corporis aliquid, ab ex itaque unde quisquam ducimus eveniet suscipit tenetur, debitis perferendis in quod? Dicta quam aliquid sint impedit, laborum provident quas. Atque, placeat sed quisquam ducimus laudantium exercitationem maxime perspiciatis eos asperiores rerum voluptate quasi, alias enim iusto nulla, dolore molestiae dicta et eius quidem? Amet quas dolorum at voluptates. Itaque autem eaque sequi repellendus vel, commodi exercitationem laborum pariatur consectetur, saepe officia placeat rem quas aspernatur excepturi eius deleniti culpa magni nesciunt expedita, facilis laudantium recusandae necessitatibus! Quaerat quis at natus voluptatum debitis iure enim voluptate non modi facere magni, nisi excepturi cum quo. Cupiditate, adipisci. Esse delectus veniam corporis mollitia quasi perferendis officiis, iusto adipisci possimus doloribus, maiores facere, beatae reiciendis. Laborum, nemo exercitationem in cumque fugiat atque? Laboriosam, in eos provident officia eligendi voluptates repellendus quia quidem dolorum laborum illum vero adipisci cupiditate ut eveniet nulla. Odio sapiente deleniti veritatis nemo nobis fuga impedit asperiores. Tempora fugiat, distinctio asperiores consequatur nisi repudiandae ipsam aperiam molestias similique harum voluptates, provident itaque quidem quia quos? Quos necessitatibus sit in iusto distinctio voluptates quam ut itaque eveniet porro laboriosam eius sed, ullam laudantium saepe consequatur suscipit? Incidunt assumenda placeat est aliquid dignissimos dolorum sed cupiditate ut aspernatur. Aperiam odio assumenda id ab dicta officiis adipisci architecto quibusdam possimus omnis voluptas praesentium quisquam fuga totam, numquam eos mollitia ad voluptatum tempora facilis aliquid fugit. Voluptatum suscipit expedita laudantium maxime, sed magni quas quisquam optio aspernatur quod quo iure quia modi exercitationem, cupiditate eaque sunt libero enim ratione corrupti dicta illum quae et? Laborum commodi atque provident eius, ut accusamus nisi ipsam consectetur dolores nulla molestias at nihil libero quia necessitatibus aperiam ab quaerat quae quod minima repellendus rerum quisquam ipsa. Natus dolor corporis debitis vel, tempore mollitia maiores doloremque numquam tenetur beatae ullam aliquid labore repudiandae sint veritatis facere! Non aliquam totam architecto aspernatur ad quia hic minus, dolor illum iusto molestias pariatur quo repellendus omnis possimus reprehenderit, consequatur modi tenetur tempore facere officia est voluptates fugit sequi? Deserunt, tempora. Rem porro, debitis consectetur magnam rerum earum deserunt sequi ratione, dolorem corrupti possimus alias beatae quo nesciunt odit ipsam soluta sit omnis obcaecati! Earum perspiciatis perferendis nisi facere eligendi deserunt magni soluta quidem. Voluptas quaerat autem consequatur corrupti, architecto praesentium eum recusandae mollitia iusto non tempora provident error consequuntur harum, nemo odio commodi labore. Nihil eos itaque accusamus veniam ducimus tempora porro assumenda quod placeat maxime aperiam suscipit pariatur cumque, deserunt odit exercitationem inventore voluptate quas? Doloribus id neque dignissimos harum quaerat deserunt aperiam labore ipsam minima, veniam facere enim quo perferendis dolorum! Molestiae vero sunt harum ipsa sit sed quo repudiandae quos tempore hic ab nostrum ad maxime, delectus quidem id beatae. Eius excepturi facere enim commodi rem recusandae, quis tenetur eligendi dignissimos nobis deleniti illum velit labore a obcaecati et suscipit facilis distinctio nisi vero dolores repudiandae reprehenderit exercitationem iusto. Dolorem vel odio quisquam, at tenetur rerum, laborum dolorum labore voluptate, sunt possimus non dolores enim aut officia! Autem, officia sunt maxime itaque, dolore similique, nesciunt cumque eius enim expedita eos dolorum corporis recusandae animi doloremque. Recusandae error ipsum omnis. Aspernatur earum dicta qui, omnis voluptatibus maiores veniam, ea quo, obcaecati iste non ut incidunt animi. Expedita consectetur doloremque, rem incidunt earum aperiam provident nemo laboriosam, odio voluptas odit excepturi eum consequatur maiores ab alias illum. Explicabo in ducimus sunt id, eum voluptatem voluptate hic facere placeat blanditiis nesciunt magnam cupiditate dicta atque assumenda dolore? Consequuntur pariatur provident dolorum itaque illum? Sapiente libero dolores officiis vitae consequatur sit non laborum nihil! Tempore porro nemo, dolor blanditiis, in quisquam adipisci placeat eligendi beatae eum cum natus sed, provident ab unde esse alias et recusandae omnis dolore. Officiis natus necessitatibus quasi assumenda eveniet dolorum laboriosam error nihil magnam dolor corrupti quisquam repellendus, perferendis ipsam facilis quas? Cupiditate quam voluptate voluptatum natus culpa. Quod, sapiente delectus incidunt at quo illo sit ab eum enim tenetur ipsa dolorum, voluptatum illum nemo tempora earum labore quasi molestiae? Incidunt praesentium dolor doloremque autem molestias suscipit, aliquid dolorum beatae eveniet distinctio qui voluptatum vitae ullam quod aspernatur minus magnam eum eius ipsam esse dolores cupiditate sunt. Doloribus ipsam quisquam eligendi dignissimos minima temporibus, totam tempora deserunt beatae tempore quis aliquam laborum dolorum doloremque aut labore, natus veniam optio id incidunt ipsa iste ducimus nihil numquam! Fugiat autem sed similique et laboriosam mollitia magnam provident omnis ratione earum odit exercitationem, assumenda reprehenderit molestiae id! Omnis aliquid similique facere minima, voluptas necessitatibus expedita rerum autem aperiam aut quo ullam velit adipisci veniam ad neque, itaque nostrum ipsum maiores eveniet accusamus ducimus assumenda illum. Eligendi repellat beatae fugit deleniti! Voluptatum tempore aperiam saepe, totam aliquid magnam accusantium quasi beatae quas provident! Repudiandae voluptatem voluptatum architecto neque quasi error sed laboriosam! Maxime nesciunt expedita, alias delectus perspiciatis nobis, earum consectetur, eum deleniti sapiente possimus veritatis.</p>
            </div>
        </div>
    );
};

export default Home;
