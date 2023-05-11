import img1 from '../assets/img/img-1.jpg'
import img2 from '../assets/img/img-2.jpg'

const dropdownData=[
    {
        id:1,
        title:'KURUMSAL',
        display:'KRUMSAL',
        text:'Kurumsal Yemek Çözümleri',
        taxtCase:' İş yerinize en uygun fiyat ve modelle kurumsal düzenli yemek hizmeti.',
        buttons:'BİLGİ AL',
        img:img2,
        imgs:img1,
        imgTextOne:'Porselen Tabak Sunumuyla Taşıma Yemek',
        classCase:'dropdownIns',
        styles:'border-r'
        
    },
    {
        id:2,
        title:'BİREYSEL',
        display:'BİREYSEL',
        text:null,
        taxtCase:'Evde Gurme Yemek Paketleri',
        buttons:'SATIN AL',
        img:img1,
        imgs:null,
        imgTextOne:'Porselen Tabak Sunumuyla Taşıma Yemek',
        classCase:'dropdownInd',
        styles:'border-r'
       
    },
    {
        id:3,
        title:'ETKİNLİK/ORGANİZASYON',
        display:'ETKİNLİK/ORGANİZASYON',
        text:' Etkinlikleriniz ve toplantılarınız için aradığınız kaliteli toplu yemek hizmeti',
        taxtCase:null,
        buttons:'TEKLİF AL',
        img:img2,
        imgs:null,
        imgTextOne:'Porselen Tabak Sunumuyla Taşıma Yemek',
        classCase:'dropdownActiv',
        styles:'border-r'
    
    },
    {
        id:4,
        title:'SOSYAL SORUMLULUK',
        display:'SOSYAL SORUMLULUK',
        text:' İhtiyaç sahipleri için “Askıda Yemek Var” projesi kapsamında siz de askıya ‘4 çeşit yemek’ bırakabilirsiniz.',
        taxtCase:null,
        buttons:'ASKIYA YEMEK BIRAK',
        img:img1,
        imgs:null,
        imgTextOne:'Porselen Tabak Sunumuyla Taşıma Yemek',
        classCase:'dropdownRes',
        styles:'border-none'
       
    },
]

export default dropdownData