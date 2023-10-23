import axios from "axios";
process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'
export default async function rosreesrtItem(req, res) {
  const Number = req.query.cadNumber;

  try {
    const itemRosreestr = await axios(`https://mkdfond.ru/api/findId?cadNumber=${Number}`
    );

    return res.json(itemRosreestr?.data?.getAskId);
  } catch (error) {
    console.error('Произошла ошибка при выполнении запроса:', error);
    return res.json([])
  }
}