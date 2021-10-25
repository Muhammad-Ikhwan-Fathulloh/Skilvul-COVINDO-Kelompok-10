// var data = [
//   { loc: [4.225081, 96.909522], title: "Aceh", kode: 11 },
//   {
//     loc: [2.1847792149105123, 99.05788784892918],
//     title: "Sumatera Utara",
//     kode: 12,
//   },
//   {
//     loc: [0.8519143477257053, 100.46680503029917],
//     title: "Sumatera Barat",
//     kode: 13,
//   },
//   { loc: [0.5105258491811052, 101.81289195391142], title: "Riau", kode: 14 },
//   { loc: [-1.6177499996423312, 103.59931999973587], title: "Jambi", kode: 15 },
//   {
//     loc: [-3.213346821849744, 104.17041944464856],
//     title: "Sumatera Selatan",
//     kode: 16,
//   },
//   {
//     loc: [-3.7911599999922694, 102.26311999971767],
//     title: "Bengkulu",
//     kode: 17,
//   },
//   {
//     loc: [-2.2529564111524327, 105.98694808180811],
//     title: "Bangka Belitung",
//     kode: 18,
//   },
//   { loc: [-4.918073087438925, 105.01831305094686], title: "Lampung", kode: 19 },
//   {
//     loc: [3.9159472411462137, 108.20222888881389],
//     title: "Kepulauan Riau",
//     kode: 21,
//   },
//   {
//     loc: [-6.171480000380943, 106.82648999970596],
//     title: "DKI Jakarta",
//     kode: 31,
//   },
//   {
//     loc: [-6.919980215676874, 107.60280789771438],
//     title: "Jawa Barat",
//     kode: 32,
//   },
//   {
//     loc: [-7.258970382933987, 110.20111252917499],
//     title: "Jawa Tengah",
//     kode: 33,
//   },
//   {
//     loc: [-7.895013815160975, 110.44536697110821],
//     title: "Daerah Istimewa Yogyakarta",
//     kode: 34,
//   },
//   {
//     loc: [-7.720113018739566, 112.73367880118164],
//     title: "Jawa Timur",
//     kode: 35,
//   },
//   { loc: [-6.456181598923129, 106.10919706896232], title: "Banten", kode: 36 },
//   { loc: [-8.369743261086477, 115.1316509954286], title: "Bali", kode: 51 },
//   {
//     loc: [-8.606652084111358, 117.50686245225263],
//     title: "Nusa Tenggara Barat",
//     kode: 52,
//   },
//   {
//     loc: [-8.604843331946174, 121.14182917026827],
//     title: "Nusa Tenggara Timur",
//     kode: 53,
//   },
//   {
//     loc: [-0.0859012339120799, 111.12076240064373],
//     title: "Kalimantan Barat",
//     kode: 61,
//   },
//   {
//     loc: [-1.6343400452136536, 113.18104785169665],
//     title: "Kalimantan Tengah",
//     kode: 62,
//   },
//   {
//     loc: [-2.4497791372641027, 115.3113078341141],
//     title: "Kalimantan Selatan",
//     kode: 63,
//   },
//   {
//     loc: [0.4610462269900238, 116.4708583933213],
//     title: "Kalimantan Timur",
//     kode: 64,
//   },
//   {
//     loc: [2.888820960580607, 116.21671830879166],
//     title: "Kalimantan Utara",
//     kode: 65,
//   },
//   {
//     loc: [1.2860976870791652, 124.53537884973578],
//     title: "Sulawesi Utara",
//     kode: 71,
//   },
//   {
//     loc: [-1.4592149539219135, 120.44959250038355],
//     title: "Sulawesi Tengah",
//     kode: 72,
//   },
//   {
//     loc: [-3.747115711801693, 120.16115770364497],
//     title: "Sulawesi Selatan",
//     kode: 73,
//   },
//   {
//     loc: [-4.1328039709672435, 122.0786780559111],
//     title: "Sulawesi Tenggara",
//     kode: 74,
//   },
//   {
//     loc: [0.5370700003394442, 123.06184000014997],
//     title: "Gorontalo",
//     kode: 75,
//   },
//   {
//     loc: [-2.461902015116017, 119.34347138338468],
//     title: "Sulawesi Barat",
//     kode: 76,
//   },
//   { loc: [-3.1261193431769434, 129.3604249999869], title: "Maluku", kode: 81 },
//   {
//     loc: [0.8693370008694276, 128.0159294419005],
//     title: "Maluku Utara",
//     kode: 82,
//   },
//   { loc: [-5.000000000227514, 140.0000000003746], title: "Papua", kode: 91 },
//   {
//     loc: [-2.0417232818795226, 132.96834171194755],
//     title: "Papua Barat",
//     kode: 94,
//   },
//   { loc: [-6.918497, 107.661074], title: "Antapani", kode: 100 },
//   { loc: [-6.921875, 107.676692], title: "Arcamanik", kode: 101 },
//   { loc: [-6.900284, 107.645517], title: "Cibeunying Kidul", kode: 102 },
//   { loc: [-6.954941, 107.676102], title: "Rancasari", kode: 103 },
//   { loc: [-6.950745, 107.653701], title: "Buahbatu", kode: 104 },
//   { loc: [-6.933022, 107.627173], title: "Lengkong", kode: 105 },
//   { loc: [-6.928656, 107.639177], title: "Batununggal", kode: 106 },
//   { loc: [-6.908968, 107.705236], title: "Ujung Berung", kode: 107 },
//   { loc: [-6.887188, 107.591051], title: "Sukajadi", kode: 108 },
//   { loc: [-6.885899, 107.6144], title: "Coblong", kode: 109 },
//   { loc: [-6.899618, 107.582174], title: "Cicendo", kode: 110 },
//   { loc: [-6.929167, 107.56715], title: "Bandung Kulon", kode: 111 },
//   { loc: [-6.939401, 107.612339], title: "Regol", kode: 112 },
//   { loc: [-6.865553, 107.586944], title: "Sukasari", kode: 113 },
//   { loc: [-6.897696, 107.67235], title: "Mandalajati", kode: 114 },
//   { loc: [-6.925882, 107.690704], title: "Cinambo", kode: 115 },
//   { loc: [-6.931403, 107.707208], title: "Panyileukan", kode: 116 },
//   { loc: [-6.914448, 107.722606], title: "Cibiru", kode: 117 },
//   { loc: [-6.939092, 107.602541], title: "Astana Anyar", kode: 118 },
//   { loc: [-6.88658, 107.630087], title: "Cibeunying Kaler", kode: 119 },
//   { loc: [-6.957422, 107.630225], title: "Bandung Kidul", kode: 120 },
//   { loc: [-6.923886, 107.649093], title: "Kiaracondong", kode: 121 },
//   { loc: [-6.912002, 107.578415], title: "Andir", kode: 122 },
//   { loc: [-6.94019, 107.577705], title: "Babakan Ciparay", kode: 123 },
//   { loc: [-6.90461, 107.616569], title: "Bandung Wetan", kode: 124 },
//   { loc: [-6.865613, 107.605606], title: "Cidadap", kode: 125 },
//   { loc: [-6.914826, 107.614381], title: "Sumur Bandung", kode: 126 },
//   { loc: [-6.932173, 107.589905], title: "Bojongloa Kaler", kode: 127 },
//   { loc: [-6.953931, 107.697747], title: "Gedebage", kode: 128 },
//   { loc: [-6.95178, 107.598316], title: "Bojongloa Kidul", kode: 129 },
//   { loc: [5.55102, 95.323552], title: "Banda Aceh", kode: 130 },
//   { loc: [5.529746, 95.477297], title: "Aceh Besar", kode: 131 },
//   { loc: [5.156894, 95.932766], title: "Pidie", kode: 132 },
//   { loc: [4.871126, 95.635821], title: "Aceh Jaya", kode: 133 },
//   { loc: [4.496341, 96.1539], title: "Aceh Barat", kode: 134 },
//   { loc: [5.177897, 96.195137], title: "Pidie Jaya", kode: 135 },
//   { loc: [4.145493, 96.49104], title: "Nagan Raya", kode: 136 },
//   { loc: [3.805307, 97.006596], title: "Aceh Barat Daya", kode: 137 },
//   { loc: [4.543109, 97.610765], title: "Aceh Timur", kode: 138 },
//   { loc: [3.395909, 97.365969], title: "Aceh Selatan", kode: 139 },
//   { loc: [3.357182, 97.695528], title: "Aceh Tenggara", kode: 140 },
//   { loc: [2.755821, 97.914153], title: "Subulussalam", kode: 141 },
//   { loc: [4.275964, 98.001402], title: "Aceh Tamiang", kode: 142 },
//   { loc: [4.032917, 97.350681], title: "Gayo Lues", kode: 143 },
//   { loc: [5.020947, 97.226142], title: "Aceh Utara", kode: 144 },
//   { loc: [4.483484, 97.97355], title: "Langsa", kode: 145 },
//   { loc: [3.87643, 98.307765], title: "Langkat", kode: 146 },
//   { loc: [3.158072, 98.177535], title: "Karo", kode: 147 },
//   { loc: [3.459375, 98.702932], title: "Deli Serdang", kode: 148 },
//   { loc: [3.02052, 99.281291], title: "Simalungun", kode: 149 },
//   { loc: [3.561379, 98.662549], title: "Medan", kode: 150 },
//   { loc: [3.376064, 99.055176], title: "Serdang Bedagai", kode: 151 },
//   { loc: [2.912158, 98.267834], title: "Dairi", kode: 152 },
//   { loc: [1.38356, 99.272511], title: "Padang Sidempuan", kode: 153 },
//   { loc: [1.962706, 100.159058], title: "Labuhan Batu Selatan", kode: 154 },
//   { loc: [2.428963, 100.180456], title: "Labuhan Batu ", kode: 155 },
//   { loc: [2.901603, 99.634647], title: "Asahan", kode: 156 },
//   { loc: [2.130235, 99.102096], title: "Tapanuli Utara", kode: 157 },
//   { loc: [1.66104, 99.636487], title: "Padang Lawas Utara", kode: 158 },
//   { loc: [1.753934, 99.287874], title: "Tapanuli Selatan", kode: 159 },
//   { loc: [1.358204, 97.392354], title: "Nias Utara", kode: 160 },
//   { loc: [0.873583, 97.814832], title: "Nias Selatan", kode: 161 },
//   { loc: [1.061943, 97.475212], title: "Nias Barat", kode: 162 },
//   { loc: [1.28015, 97.615345], title: "Gunung Sitoli", kode: 163 },
//   { loc: [1.133726, 97.742385], title: "Kabupaten Nias", kode: 164 },
//   { loc: [1.935127, 98.705707], title: "Tapanuli Tengah", kode: 165 },
//   { loc: [2.979849, 99.067954], title: "Kota Pematang Siantar", kode: 166 },
//   { loc: [3.215337, 99.501898], title: "Batu Bara", kode: 167 },
//   { loc: [0.831748, 99.366491], title: "Mandailing Natal", kode: 168 },
//   { loc: [2.38826, 99.296471], title: "Toba Samosir", kode: 169 },
//   { loc: [2.542438, 98.708573], title: "Samosir", kode: 170 },
//   { loc: [-8.182956, 114.950096], title: "Buleleng", kode: 171 },
//   { loc: [-8.300924, 114.666367], title: "Jembrana", kode: 172 },
//   { loc: [-8.439883, 115.046813], title: "Tabanan", kode: 173 },
//   { loc: [-8.660798, 115.211911], title: "Denpasar", kode: 174 },
//   { loc: [-7.603785, 112.775015], title: "Bangil", kode: 175 },
//   { loc: [-8.325965, 115.520535], title: "Karang Asem", kode: 176 },
//   { loc: [-2.204576, 106.060819], title: "Bangka", kode: 177 },
//   { loc: [-1.752369, 105.496252], title: "Bangka Barat", kode: 178 },
//   { loc: [-2.650633, 106.440018], title: "Bangka Selatan", kode: 179 },
//   { loc: [-2.314714, 106.210524], title: "Bangka Tengah", kode: 180 },
//   { loc: [-2.829445, 107.952451], title: "Belitung", kode: 181 },
//   { loc: [-2.78455, 108.148063], title: "Belitung Timur", kode: 182 },
//   { loc: [-2.126459, 106.117093], title: "Pangkal Pinang", kode: 183 },
//   { loc: [-4.467238, 103.269701], title: "Kaur", kode: 184 },
//   { loc: [-4.31237, 103.036186], title: "Bengkulu Selatan", kode: 185 },
//   { loc: [-4.01726, 102.71318], title: "Seluma", kode: 186 },
//   { loc: [-3.595444, 102.668274], title: "Kepahiang", kode: 187 },
//   { loc: [-3.138948, 101.981087], title: "Bengkulu Utara", kode: 188 },
//   { loc: [-3.789374, 102.260459], title: "Bengkulu", kode: 189 },
//   { loc: [-3.688407, 102.391015], title: "Bengkulu Tengah", kode: 190 },
//   { loc: [0.587812, 123.347258], title: "Bone Bolango", kode: 191 },
//   { loc: [0.944647, 122.490923], title: "Gorontalo Utara", kode: 192 },
//   { loc: [0.746224, 121.717879], title: "Pohuwato", kode: 193 },
//   { loc: [0.77258, 122.449946], title: "Gorontalo", kode: 194 },
//   { loc: [-6.156751, 106.763093], title: "Jakarta Barat", kode: 195 },
//   { loc: [-6.251681, 106.809973], title: "Jakarta Selatan", kode: 196 },
//   { loc: [-6.202427, 106.900881], title: "Jakarta Timur", kode: 197 },
//   { loc: [-6.170021, 106.827533], title: "Jakarta Pusat", kode: 198 },
//   { loc: [-6.144757, 106.892364], title: "Jakarta Utara", kode: 199 },
//   { loc: [-1.661634, 103.071599], title: "Batang Hari", kode: 200 },
//   { loc: [-1.598101, 101.890398], title: "Bungo", kode: 201 },
//   { loc: [-1.827884, 101.429345], title: "Kerinci", kode: 202 },
//   { loc: [-2.088935, 101.976105], title: "Merangin", kode: 203 },
//   { loc: [-1.468746, 103.820849], title: "Muaro Jambi", kode: 204 },
//   { loc: [-2.281507, 102.715373], title: "Sarolangun", kode: 205 },
//   { loc: [-1.063742, 103.081247], title: "Tanjung Jabung Barat", kode: 206 },
//   { loc: [-1.09388, 103.821196], title: "Tanjung Jabung Timur", kode: 207 },
//   { loc: [-1.1755, 102.350468], title: "Tebo", kode: 208 },
//   { loc: [-1.600139, 103.612614], title: "Jambi", kode: 209 },
//   { loc: [-2.057445, 101.394746], title: "Sungai Penuh", kode: 210 },
//   { loc: [-7.361383, 109.615527], title: "Banjarnegara", kode: 211 },
//   { loc: [-7.467915, 109.141095], title: "Banyumas", kode: 212 },
//   { loc: [-7.404708, 110.687613], title: "Boyolali", kode: 213 },
//   { loc: [-6.931808, 108.901221], title: "Brebes", kode: 214 },
//   { loc: [-7.695881, 109.02331], title: "Cilacap", kode: 215 },
//   { loc: [-6.999509, 110.438348], title: "Semarang", kode: 216 },
//   { loc: [-7.478434, 110.217529], title: "Magelang", kode: 217 },
//   { loc: [-6.886227, 109.674331], title: "Pekalongan", kode: 218 },
//   { loc: [-7.328466, 110.508157], title: "Salatiga", kode: 219 },
//   { loc: [-6.876364, 109.12565], title: "Tegal", kode: 220 },
//   { loc: [-7.573502, 110.82379], title: "Surakarta", kode: 221 },
//   { loc: [-3.631272, 115.034486], title: "Belangian", kode: 222 },
//   { loc: [-2.283799, 115.614238], title: "Balangan", kode: 223 },
//   { loc: [-3.445611, 114.809835], title: "Banjar Baru", kode: 224 },
//   { loc: [-2.986449, 114.66671], title: "Barito Kuala", kode: 225 },
//   { loc: [-2.842341, 115.946593], title: "Kota Baru", kode: 226 },
//   { loc: [-3.408588, 115.570046], title: "Tanah Bumbu", kode: 227 },
//   { loc: [-3.313279, 114.594383], title: "Banjarmasin", kode: 228 },
//   { loc: [-1.793738, 114.805967], title: "Barito Selatan", kode: 229 },
//   { loc: [-1.924147, 115.185537], title: "Barito Timur", kode: 230 },
//   { loc: [-1.64153, 114.330871], title: "Kapuas", kode: 231 },
//   { loc: [-2.211246, 113.913509], title: "Palangka Raya", kode: 232 },
//   { loc: [-1.17086, 113.567785], title: "Gunung Mas", kode: 233 },
//   { loc: [-0.795883, 112.805959], title: "Katingan", kode: 234 },
//   { loc: [-0.309176, 115.849466], title: "Kutai Barat", kode: 235 },
//   { loc: [0.03179, 116.603783], title: "Kutai Kartanegara", kode: 236 },
//   { loc: [1.117146, 116.959513], title: "Kutai Timur", kode: 237 },
//   { loc: [1.046329, 114.718504], title: "Mahakam Ulu", kode: 238 },
//   { loc: [-1.226776, 116.852388], title: "Balikpapan", kode: 239 },
//   { loc: [0.131607, 117.479383], title: "Bontang", kode: 240 },
//   { loc: [-0.478787, 117.126764], title: "Samarinda", kode: 241 },
//   { loc: [2.984483, 116.976667], title: "Bulungan", kode: 242 },
//   { loc: [3.585549, 116.647926], title: "Malinau", kode: 243 },
//   { loc: [4.168063, 116.604199], title: "Nunukan", kode: 244 },
//   { loc: [3.562631, 117.078996], title: "Tana Tidung", kode: 245 },
//   { loc: [3.33699, 117.57908], title: "Tarakan", kode: 246 },
//   { loc: [-5.221797, 104.567131], title: "Tanggamus", kode: 247 },
//   { loc: [-5.218741, 104.117779], title: "Pesisir Barat", kode: 248 },
//   { loc: [-5.037602, 104.140886], title: "Lampung Barat", kode: 249 },
//   { loc: [-5.449251, 105.079429], title: "Pesawaran", kode: 250 },
//   { loc: [-5.29489, 104.984426], title: "Pringsewu", kode: 251 },
//   { loc: [-5.115697, 105.306894], title: "Metro", kode: 252 },
//   { loc: [1.595123, 127.897864], title: "Halmahera Utara", kode: 253 },
//   { loc: [1.437174, 127.590035], title: "Halmahera Barat", kode: 254 },
//   { loc: [1.392788, 128.496425], title: "Halmahera Timur", kode: 255 },
//   { loc: [0.684113, 127.403801], title: "Tidore", kode: 256 },
//   { loc: [-1.35513, 127.712851], title: "Halmahera Selatan", kode: 257 },
//   { loc: [-5.13679, 119.43215], title: "Makassar", kode: 258 },
//   { loc: [-4.655168, 120.0586], title: "Bone", kode: 259 },
//   { loc: [-2.999638, 120.198267], title: "Palopo", kode: 260 },
//   { loc: [-3.036295, 119.746907], title: "Tana Toraja", kode: 261 },
//   { loc: [-4.000926, 120.065994], title: "Wajo", kode: 262 },
//   { loc: [0.916603, 120.753028], title: "Toli-Toli", kode: 263 },
//   { loc: [0.616709, 120.850083], title: "Parigi Moutong", kode: 264 },
//   { loc: [-0.26861, 119.824191], title: "Donggala", kode: 265 },
//   { loc: [-0.850665, 119.905441], title: "Palu", kode: 266 },
//   { loc: [-1.393668, 120.753686], title: "Poso", kode: 267 },
//   { loc: [-3.224076, 120.239224], title: "Luwu", kode: 268 },
//   { loc: [1.486245, 124.842162], title: "Manado", kode: 269 },
//   { loc: [1.241854, 124.817857], title: "Minahasa", kode: 270 },
//   { loc: [0.726594, 124.06648], title: "Boolang Mongondow", kode: 271 },
//   { loc: [-3.695074, 102.895611], title: "Empat Lawang", kode: 272 },
//   { loc: [-3.989917, 104.004818], title: "Ogan Komering Ulu", kode: 273 },
//   { loc: [-3.764609, 103.36001], title: "Lahat", kode: 274 },
//   { loc: [-2.557729, 104.750545], title: "Banyuasin", kode: 275 },
//   { loc: [-3.389461, 104.610811], title: "Ogan Ilir", kode: 276 },
//   { loc: [-2.965595, 104.775321], title: "Palembang", kode: 277 },
//   { loc: [-4.038855, 103.227983], title: "Pagar Alam", kode: 278 },
//   { loc: [-3.295186, 102.857377], title: "Lubuk Linggau", kode: 279 },
//   { loc: [-3.416642, 104.243721], title: "Prambumulih", kode: 280 },
//   { loc: [-0.02767, 109.331722], title: "Kota Pontianak", kode: 1000 },
//   { loc: [0.903733, 109.02916], title: "Kota Singkawang", kode: 1001 },
//   { loc: [0.366191, 108.958293], title: "Mempawah", kode: 1002 },
//   { loc: [-0.352428, 109.55314], title: "Kubu Raya", kode: 1003 },
//   { loc: [-1.034708, 110.112433], title: "Kayong Utara", kode: 1004 },
//   { loc: [-1.481955, 110.636839], title: "Ketapang", kode: 1005 },
//   { loc: [-0.591043, 111.700678], title: "Melawi", kode: 1006 },
//   { loc: [0.342784, 110.479989], title: "Sanggau", kode: 1007 },
//   { loc: [0.022149, 110.970531], title: "Sekadau", kode: 1008 },
//   { loc: [0.991344, 109.548801], title: "Bengkayang", kode: 1009 },
//   { loc: [1.417719, 109.35797], title: "Sambas", kode: 1010 },
//   { loc: [0.842812, 112.780548], title: "Kapuas Hulu", kode: 1011 },
//   { loc: [0.018904, 111.916832], title: "Sintang", kode: 1012 },
//   { loc: [0.520491, 109.777473], title: "Landak", kode: 1013 },
// ];

// var map = L.map("mapid", { zoomControl: false }).setView(
//   [-3.824181, 117.8191513],
//   5
// );

// map.addLayer(
//   L.tileLayer(
//     "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
//     {
//       maxZoom: 18,
//       attribution:
//         'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
//         'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//       id: "mapbox/streets-v11",
//       tileSize: 512,
//       zoomOffset: -1,
//     }
//   )
// );

// var api =
//   "https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json";
// var dataCovid = [];
// var geojson = [];
// var dataSearch = [];

// renderPost();

// var zoomHome = L.Control.zoomHome();
// zoomHome.addTo(map);

// // Pencarian
// var markersLayer = new L.LayerGroup(); //layer contain searched elements

// map.addLayer(markersLayer);

// var controlSearch = new L.Control.Search({
//   position: "topright",
//   layer: markersLayer,
//   initial: false,
//   zoom: 9,
//   marker: false,
// });

// controlSearch.on("search:locationfound", function (e) {
//   showInfo(e.layer.options.kode);
// });

// map.addControl(controlSearch);

// for (i in data) {
//   var title = data[i].title, //value searched
//     kode = data[i].kode,
//     loc = data[i].loc, //position found
//     marker = new L.Circle(new L.latLng(loc), { title: title, kode: kode }); //se property searched
//   markersLayer.addLayer(marker);
// }

// function getColor(positif) {
//   color = "#0d0";
//   if (positif > 50000) {
//     color = "#DC143C";
//   } else if (positif > 1) {
//     color = "#FFD700";
//   } else if (positif == 0) {
//     color = "#32CD32";
//   }
//   return color;
// }
// // atur style
// function style(f) {
//   var KODE = f.properties.KODE;
//   data = dataCovid[KODE];
//   // console.log(data);
//   return {
//     weight: 1,
//     opacity: 1,
//     color: "black",
//     dashArray: "3",
//     fillOpacity: 0.7,
//     fillColor: getColor(data.Kasus_Posi),
//   };
// }
// // update jika hover
// function highlightFeature(e) {
//   var layer = e.target;

//   layer.setStyle({
//     weight: 1,
//     color: "white",
//     dashArray: "",
//     fillOpacity: 0.7,
//   });

//   if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
//     layer.bringToFront();
//   }
// }
// // update info
// function resetHighlight(e) {
//   var layer = e.target;
//   layer.setStyle({
//     weight: 1,
//     opacity: 1,
//     color: "black",
//     dashArray: "3",
//     fillOpacity: 0.7,
//   });
// }

// function onEachFeature(f, layer) {
//   layer.on({
//     mouseover: highlightFeature,
//     mouseout: resetHighlight,
//   });
//   var KODE = f.properties.KODE;
//   data = dataCovid[KODE];

//   var popUp =
//     "<table>" +
//     "<tr>" +
//     '<td colspan="4"><h6>' +
//     data.Provinsi +
//     "</h6></td>" +
//     "</tr>" +
//     "</table>";
//   layer.bindPopup(popUp);
//   layer.on(
//     "click",
//     function (event) {
//       showInfo(KODE);
//     },
//     this
//   );
// }

// function showInfo(kode) {
//   data = dataCovid[kode];

//   document.getElementById("terkonfirmasi").innerHTML = data.Kasus_Posi;
//   document.getElementById("sembuh").innerHTML = data.Kasus_Semb;
//   document.getElementById("dirawat").innerHTML =
//     data.Kasus_Posi - data.Kasus_Semb - data.Kasus_Meni;
//   document.getElementById("meninggal").innerHTML = data.Kasus_Meni;

//   if (data.Kasus_Posi > 50000) {
//     var div =
//       '<div class="container  text-center" style="background-color:#EB5156;color:white;padding:15px 0px 15px 0px;font-weight:600;">' +
//       data.Provinsi +
//       " berada dalam Zona Merah. Anda dianjurkan untuk tetap dirumah, atau tidak mendatangi daerah ini</div>";
//     document.getElementById("warning").innerHTML = div;
//   } else if (data.Kasus_Posi > 1) {
//     var div =
//       '<div class="container text-center" style="background-color:#EDEF4D;color:white;padding:15px 0px 15px 0px;font-weight:600;">' +
//       data.Provinsi +
//       " berada dalam Zona Kuning. Anda dianjurkan untuk tidak mendatangi daerah ini kecuali dengan alasan darurat</div>";
//     document.getElementById("warning").innerHTML = div;
//   } else if (data.Kasus_Posi == 0) {
//     var div =
//       '<div class="container text-center" style="background-color:#61BC6B;color:white;padding:15px 0px 15px 0px;font-weight:600;">' +
//       data.Provinsi +
//       " berada dalam Zona Hijau. Anda dapat beraktivitas seperti biasa namun tetap menjaga protokol kesehatan</div>";
//     document.getElementById("warning").innerHTML = div;
//   }
// }

// var legend = L.control({ position: "bottomright" });
// var reset_btn = L.control({ position: "bottomright" });

// reset_btn.onAdd = function (map) {
//   var div = L.DomUtil.create("div", "reset"),
//     labels = [];

//   labels.push(
//     '<button type="button" class="btn btn-info" onclick="reset_data()" style="width:90px;background-color:#EFF9F9;color:#71B5B6;font-size:15px;font-weight:700;border-color:transparent;border-radius:5px">Reset</button>'
//   );

//   div.innerHTML = labels.join("<br>");
//   return div;
// };

// legend.onAdd = function (map) {
//   var div = L.DomUtil.create("div", "info legend"),
//     grades = [0, 1, 50000],
//     labels = [],
//     from,
//     to;

//   for (var i = 0; i < grades.length; i++) {
//     from = grades[i];
//     to = grades[i + 1];

//     if (from != 0) {
//       labels.push(
//         '<i style="background:' +
//           getColor(from + 1) +
//           '"></i> ' +
//           from +
//           (to ? "&ndash;" + to : "+")
//       );
//     } else {
//       labels.push(
//         '<i style="background:' + getColor(from + 1) + '"></i> ' + from
//       );
//     }
//   }

//   div.innerHTML = labels.join("<br>");
//   return div;
// };

// legend.addTo(map);
// reset_btn.addTo(map);

// function reset_data() {
//   map.setView([-3.824181, 117.8191513], 5);
//   $.ajax({
//     url: api,
//     dataType: "JSON",
//     success: function (data) {
//       var features = data.features;
//       var jlh_terkonfirmasi = 0;
//       var jlh_sembuh = 0;
//       var jlh_meninggal = 0;
//       for (i = 0; i < features.length; i++) {
//         var attributes = features[i].attributes;
//         // var Kode_Provi=attributes.Kode_Provi;
//         // dataCovid[Kode_Provi]=attributes;
//         // dataSearch[i]=features[i];
//         jlh_terkonfirmasi += attributes.Kasus_Posi;
//         jlh_sembuh += attributes.Kasus_Semb;
//         jlh_meninggal += attributes.Kasus_Meni;
//       }
//       document.getElementById("terkonfirmasi").innerHTML = jlh_terkonfirmasi;
//       document.getElementById("sembuh").innerHTML = jlh_sembuh;
//       document.getElementById("dirawat").innerHTML =
//         jlh_terkonfirmasi - jlh_sembuh - jlh_meninggal;
//       document.getElementById("meninggal").innerHTML = jlh_meninggal;
//       document.getElementById("warning").innerHTML = " ";
//     },
//   });
// }

// async function getMap() {
//   try {
//     let response = await fetch(
//       "https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json",
//       {
//         method: "GET",
//       }
//     );
//     let jsonResponse = await response.json();
//     return jsonResponse;
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function renderPost() {
//   let map = await getMap();
//   var features = map.features;
//   var jlh_terkonfirmasi = 0;
//   var jlh_sembuh = 0;
//   var jlh_meninggal = 0;
//   return console.log(features);
//   for (i = 0; i < features.length; i++) {
//     var attributes = features[i].attributes;
//     var Kode_Provi = attributes.Kode_Provi;
//     dataCovid[Kode_Provi] = attributes;
//     dataSearch[i] = features[i];
//     jlh_terkonfirmasi += attributes.Kasus_Posi;
//     jlh_sembuh += attributes.Kasus_Semb;
//     jlh_meninggal += attributes.Kasus_Meni;
//   }
//   document.getElementById("terkonfirmasi").innerHTML = jlh_terkonfirmasi;
//   document.getElementById("sembuh").innerHTML = jlh_sembuh;
//   document.getElementById("dirawat").innerHTML =
//     jlh_terkonfirmasi - jlh_sembuh - jlh_meninggal;
//   document.getElementById("meninggal").innerHTML = jlh_meninggal;
//   document.getElementById("warning").innerHTML = " ";

//   for (i = 0; i < features.length; i++) {
//     var attributes = features[i].attributes;
//     var Kode_Provi = attributes.Kode_Provi;
//     if (Kode_Provi != 0) {
//       $.getJSON("assets/geojson/" + Kode_Provi + ".geojson", function (data) {
//         var KODE = data.features[0].properties.KODE;
//         geojson[KODE] = L.geoJSON(data, {
//           onEachFeature: onEachFeature,
//           style: style,
//         }).addTo(map);
//       });
//     }
//   }
// }
