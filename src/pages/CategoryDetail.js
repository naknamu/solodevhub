import { useParams } from 'react-router-dom';

const CategoryDetail = () => {
    const { categoryid } = useParams();

    return ( 
        <div className="category-detail">
            <div className="container">
                Im category detail: {categoryid}
            </div>
        </div>
    );
}
 
export default CategoryDetail;