// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type HerbDetail = {
  code: number;
  message: string;
  data: {
    name: string;
    latin_name: string;
    local_name: string[];
    description: string;
    disease: string[];
    composition: string;
  };
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HerbDetail>
) {
  res.status(200).json({
    code: 200,
    message: "Success get detail herbs",
    data: {
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
    }
  });
}
