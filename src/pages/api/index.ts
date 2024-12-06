// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Herb = {
  name: string;
  latin_name: string;
  local_name: string[];
  description: string;
  disease: string[];
  composition: string;
};

type HerbListResponse = {
  code: number;
  message: string;
  data: Herb[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HerbListResponse>
) {
  res.status(200).json({
    code: 200,
    message: "Success get list of herbs",
    data: [
      {
        name: "Bawang Merah",
        latin_name: "(Allium Cepa)",
        local_name: [
          "Bawang abang mirah (Aceh)",
          "Pia (Batak)",
          "Bawang abang (Palembang)",
          "Bawang sirah, barambang sirah, dasun merah (Minangkabau)"
        ],
        description:
          "Herba semusim, tidak berbatang. Daun tunggal memeluk umbi lapis. Umbi lapis menebal dan berdaging, warna merah keputihan. Perbungaan berbentuk bongkol, mahkota bunga berbentuk bulat telur. Buah batu bulat, berwarna hijau. Biji segi tiga warna hitam. Bagian yang digunakan umbinya.",
        disease: ["Batuk", "Haid tidak teratur", "Kencing manis"],
        composition:
          "Minyak atsiri, sikloalin, metilaliin, dihidroaliin, flavonglikosida, kuersetin, saponin, peptida, fitchormon, vitamin dan zat pati."
      },
      {
        name: "Jahe",
        latin_name: "(Zingiber officinale)",
        local_name: [
          "Jahe (Indonesia)",
          "Jahi (Jawa)",
          "Jahe bodas (Sunda)",
          "Laia (Bugis)"
        ],
        description:
          "Tanaman herbal yang sering digunakan untuk bumbu masakan dan obat. Memiliki rimpang dengan aroma khas, berwarna putih kekuningan atau kemerahan, tergantung jenisnya.",
        disease: ["Masuk angin", "Mual", "Radang tenggorokan"],
        composition:
          "Minyak atsiri, gingerol, shogaol, zingeron, resorcinol, vitamin, dan mineral."
      }
    ]
  });
}
