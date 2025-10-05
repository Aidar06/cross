import React, { useEffect, useRef , useState} from "react";
import "./cross.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../features/productsSlice.js";
import Card from "../Card/card.jsx";
import { FaSearch } from "react-icons/fa";


const Cross = () => {
    const dispatch = useDispatch();
    const { items: products, loading, error } = useSelector((state) => state.products || { items: [] });
    const cross = useRef(null);

    const [arr, setArr] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    useEffect(() => {
        const query = search.toLowerCase().replace(/\s+/g, "");

        if (!query) {
            setArr(products); // если пустая строка → показываем все
        } else {
            const filtered = products.filter(
                (p) =>
                    p.brend.toLowerCase().replace(/\s+/g, "").includes(query) ||
                    p.model.toLowerCase().replace(/\s+/g, "").includes(query)
            );

            if (filtered.length > 0) {
                setArr(filtered);
            } else {
                setArr([]);   // пустой список
            }
        }
    }, [search, products]);








    return (
        <section id="cross">
            <div className="container">
                <div className="crossSearch">
                    <div className="crossSearch--input">
                        <input onChange={(e)=>
                            setSearch(e.target.value)
                        } placeholder='Поиск...' type="text"/>
                        <div><FaSearch /></div>
                    </div>
                </div>
                <div className="cross">
                    {
                        loading ?
                            <div className='crossD'><p>Загрузка...</p></div>:error?
                                <div className='crossD'><p>Ошибка</p></div>:arr.length === 0?
                                    <div className='crossD'><p>Ничего не найдено</p></div>:
                                    arr?.map((product, i) => (
                                        <Card key={i} product={product} />
                                    ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Cross;

