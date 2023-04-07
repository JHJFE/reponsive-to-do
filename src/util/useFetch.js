import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { init } from '../store/store';
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const dispatch = useDispatch()
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setIsPending(false);
                    dispatch(init(data))
                    setError(null);
                })
                .catch(err => {
                    setError(err.message);
                })
        }, 1000);
    }, [])
    return [data, error, isPending]/* return 문을 작성해주세요. */
}


export default useFetch;