import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import './pokemonList.css';

const PokemonCard = ({ name, image, types }) => {
    const typesString = types.map(elem => elem.type.name)

    return (
        <Card
            title={name}
            cover={
                <img src={image}
                    alt={name} />}

            extra={< StarOutlined />}
        >
            <Meta description='fire, magic' />

        </Card>
    );
};

export default PokemonCard;
