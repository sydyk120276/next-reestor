import axios from "axios";
process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'
export default async function rosreesrtItem(req, res) {
  const Number = req.query.cadNumber;
  const objectid = req.query.objectid;

//   try {
    const itemRosreestr = await axios(`https://mkdfond.ru/api/findRights?objectid=${objectid}&cadNumber=${Number}`
    );
     console.log('ITEM', itemRosreestr?.data)
    return res.json(itemRosreestr?.data)
//   }
//    catch (error) {
//     console.error('Произошла ошибка при выполнении запроса:', error);
//     return res.json([])
//   }
}