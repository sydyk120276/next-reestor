import axios from "axios";
process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'
export default async function rosreesrtItem(req, res) {
  const inputValue = req.query.query;
  console.log('inputValue server', req.query.query);

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  try {
    const itemRosreestr = await axios(`https://lk.rosreestr.ru/account-back/address/search?term=${inputValue}`
    );

    return res.json(itemRosreestr.data);
  } catch (error) {
    console.error('Произошла ошибка при выполнении запроса:', error);
    return res.status(500).json({ error: 'Произошла ошибка при выполнении запроса на сервере' });
  }
}