const {Mahasiswa, Nilai, Mata_kuliah} = require('../models');

class Controller {
    
    static async getMahasiswa(req, res) {
        try {

            const mahasiswa = await Mahasiswa.findAll({
                include: {
                    model: Nilai
                }
            });
            const hasil = mahasiswa.map(mhs => {
                let total = 0;
                let jumlahNilai = mhs.Nilais.length;
    
                if (jumlahNilai > 0) {
                    total = mhs.Nilais.reduce((sum, nilai) => sum + nilai.Nilai, 0);
                }
    
                return {
                    nama: mhs.nama,
                    rata_rata_nilai: jumlahNilai > 0 ? (total / jumlahNilai) : 0
                };
            }
            );
            res.status(200).json(hasil);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async createMahasiswa(req, res) {
        try {
            // console.log(req);
            const { nama, alamat } = req.body;
            // console.log(req.body);
            const mahasiswa = await Mahasiswa.create({ nama:nama, alamat:alamat });
            res.status(201).json({message: "mahasiswa berhasil ditambahkan", mahasiswa});
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async updateMahasiswa(req, res) {
        try {
            console.log(req.params);
            
            const { id } = req.params;
            const { nama, alamat } = req.body;
            const mahasiswa = await Mahasiswa.update({ nama, alamat }, { where: { id } });
            res.status(200).json({message: "data mahasiswa berhasil diupdate"});
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async deleteMahasiswa(req, res) {
        try {
            const { id } = req.params;
            const mahasiswa = await Mahasiswa.destroy({ where: { id } });
            res.status(200).json({message: "data mahasiswa berhasil dihapus"});
        } catch (err) {
            res.status(500).json(err);
        }
    }
    
    
}
module.exports = Controller;