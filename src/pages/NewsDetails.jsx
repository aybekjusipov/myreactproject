import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../components/loader';
import './styles/details.css';

const API_URI = id => "https://jsonplaceholder.typicode.com/posts/"+id;

function NewsDetails(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const { newsId } = useParams();
    const fetchData = async () => {
        const response = await axios.get(API_URI(newsId));
        setData(response.data);
        setLoading(false);
    }

    useEffect(fetchData, [])
    if(loading) return <Loader/>
    return(
        <div className="newsDetails">
            <div className="container">
                <Link to="/"> Home </Link><hr />
                <img src={`https://picsum.photos/id/${data.id+50}/1400/350`} alt={data.title} />
                <div className="newsDetails-body">
                    <h1> { data.title } </h1>
                    <p>
                        { data.body }
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A impedit quod odio ad, ab optio voluptates nesciunt cum rem unde veniam, accusamus explicabo minima quibusdam, modi quo. Eos delectus sapiente, maxime natus animi autem debitis exercitationem consectetur labore nobis explicabo adipisci repudiandae nisi expedita doloremque ea est ipsum eligendi impedit? Quisquam nihil facilis quae praesentium, dicta non magni rerum incidunt officia voluptatum ab debitis amet eos nisi libero, pariatur possimus corporis, at nemo quaerat temporibus tempora eveniet esse? Fugiat fugit, sit quis culpa laborum et placeat. Saepe, natus quidem quae soluta veniam a rem ullam aliquam distinctio nesciunt illum iure molestias eligendi dolorem voluptates neque, praesentium ipsa sit vel animi. Aliquam voluptas nisi provident iure sint ratione at totam in odio. Iste, veritatis. Ipsa a labore, dicta maxime quae ducimus vitae voluptatibus quisquam, odio culpa necessitatibus mollitia ratione iusto atque vero debitis numquam laudantium quo autem saepe eius veniam? Minus error odit dolorum corrupti obcaecati tempore ratione ducimus ipsa aut iure! Voluptate nulla minus tempore a. Dicta magni pariatur consequatur numquam omnis fugit itaque qui voluptatum ut ex impedit sint dolore magnam dolorum cumque, facilis, et aperiam, quos quas? Praesentium dolorem distinctio beatae corporis quod saepe aliquid doloremque maxime voluptas sunt alias quia facere ratione nostrum rem sed delectus, officiis facilis? Perspiciatis laboriosam quaerat nihil necessitatibus! Error officia ex id quis laborum! Dolore, adipisci. Mollitia, sint consequuntur amet saepe rerum porro in voluptates reprehenderit excepturi ipsa dolor, placeat officiis quia ipsam? Itaque, at cum. Accusantium earum soluta in deleniti aliquam, iusto odio porro quae culpa rem molestiae dolorem enim harum temporibus aspernatur a aperiam omnis sunt obcaecati impedit, id blanditiis. Veniam vero modi, omnis illum inventore, laboriosam dolores optio expedita dignissimos dicta quae et porro temporibus obcaecati illo unde fugit blanditiis incidunt molestias beatae cupiditate id, molestiae quod tempora. Impedit non iusto assumenda aut explicabo voluptates rem porro molestias eligendi fugiat, officiis officia iste, aperiam incidunt ad, consectetur blanditiis nam ipsa neque saepe quibusdam dolore voluptate sapiente. Nisi ullam numquam, culpa doloremque sapiente praesentium officia. Excepturi vero consequuntur placeat accusantium ut possimus aspernatur voluptates est repellendus in cum nesciunt dolorum, non esse. Odio illo dignissimos corporis distinctio sit aliquid consequatur! Maxime deleniti incidunt sunt sapiente sint voluptas? Sint tempora ducimus corrupti nemo praesentium laborum dolorem unde hic animi. Odio eos, fugit enim quis nisi iste quidem dolore dignissimos nostrum vero tempore iusto ducimus pariatur officia tempora minus accusantium doloribus cupiditate adipisci! Odio ullam obcaecati dolorem quas, totam distinctio quo magnam dolor mollitia non atque omnis natus cupiditate, fuga repellendus veritatis vitae quaerat praesentium nesciunt, dignissimos magni alias. Perspiciatis nostrum dolores commodi, blanditiis consequuntur sit unde nulla. Atque ipsa sapiente sunt pariatur repellat autem? Id vero reiciendis reprehenderit a modi ea deleniti illo assumenda cumque magnam eos inventore cupiditate mollitia dolore veniam nemo, maxime corrupti quos nihil consectetur quisquam? Molestias aut repellat, earum animi fugiat eligendi magni cumque suscipit facere ad adipisci labore incidunt repudiandae neque expedita in molestiae culpa deleniti perferendis quia. Odit molestias repellendus, eum a praesentium adipisci maiores.
                    </p>
                    <img src={`https://picsum.photos/id/${data.id+58}/1400/350`} alt={data.title} />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ea ullam ipsam debitis fugiat obcaecati natus hic? Rerum suscipit impedit, labore laboriosam voluptatibus est ex itaque ducimus, explicabo dolor praesentium id voluptate odit repellat doloremque et dolores debitis consequatur iusto. Praesentium accusamus molestias voluptatum reprehenderit rerum sed! Impedit excepturi cum laudantium optio deserunt, pariatur provident labore velit quibusdam error, repellendus asperiores iste! Provident, voluptatum doloribus similique quia deserunt accusantium. Unde sapiente hic ea quasi exercitationem saepe, repudiandae nobis et expedita molestiae aut aliquid doloremque incidunt minima magnam ipsa blanditiis odit itaque perspiciatis maxime quam molestias? Ipsum sint atque sunt debitis praesentium voluptatem quaerat dolores perferendis nostrum, eveniet impedit a excepturi qui odit quae, deserunt corporis reiciendis velit vitae quis assumenda veritatis! Sint et sed obcaecati veniam tempora consequatur sit aut quae assumenda, illum in nam! Animi illo officia tempore perferendis aut ea iure ipsam harum molestiae exercitationem nobis illum, id quos, totam distinctio omnis cum. Repellat molestiae at nobis sunt vitae ex veniam, mollitia doloremque quod facilis quidem ut quam veritatis suscipit ipsum quo molestias? Fugiat id iste alias enim architecto dolor eligendi placeat, incidunt qui totam? Doloribus accusantium iste repellendus nobis dolores natus ratione aliquam eligendi unde amet dignissimos, delectus nisi ullam quas, illum rerum nostrum velit rem perspiciatis ut quae provident? Provident aut sit placeat dolorem omnis neque est perspiciatis soluta, distinctio recusandae nulla similique dolor ullam qui, quasi, magni sed? Minima velit qui fuga ea, dignissimos repellendus voluptatum reprehenderit laboriosam. Inventore enim accusantium dolorum minima deleniti omnis, placeat cum dolorem facilis, consectetur eos saepe! Minus qui, voluptates, doloremque laborum quam provident soluta eum tempora reprehenderit nobis officiis reiciendis magni impedit nemo tempore quibusdam optio ipsa quis. Aspernatur cumque eveniet, sapiente placeat, deleniti voluptate ipsam, quibusdam iure tenetur hic optio aliquam itaque fugit asperiores? Quas tempora consequatur tenetur nesciunt dolor consequuntur asperiores voluptas, culpa non adipisci natus incidunt unde voluptates ducimus dolorum dicta laborum modi nostrum harum. Repellat.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NewsDetails;