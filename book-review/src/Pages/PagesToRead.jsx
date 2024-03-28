
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import PropTypes from 'prop-types';
import SingleBookDetails from '../Components/SingleBookDtails/SingleBookDtails';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
  { name: 'Book name', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Book name', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Book name', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Book name', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Book name', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Book name', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Book name', uv: 3490, pv: 4300, amt: 2100 },
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
  fill: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default function PagesToRead() {
  return (
    <>   
    <div className='flex justify-center border  mt-20 '>
      <BarChart
        width={1000}
        height={600}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>   
    </>
  );
}

