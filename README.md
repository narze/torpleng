# TorPleng🎙

การต่อเพลงไทยที่ยาวที่สุดในประวัติศาสตร์

## Rules

- เนื้อเพลงที่มาต่อ ต้องมีความยาวอย่างน้อย 1 ประโยค และจบด้วยคำสุดท้ายของประโยคนั้น
- คำหรือวลีที่มาต่อ ต้องเป็นคำเดียวกับคำสุดท้ายของเพลงที่แล้ว หรือพ้องเสียง
- เป็นเพลงไทย ที่มีคลิปบนเว็บ Youtube แนบคลิปพร้อมเวลาของท่อนเพลงที่จะใช้
- กฎอาจมีการเพิ่มเติม หรือยกเว้น ตามความเหมาะสม
- ไม่ใช้ท่อนเดิม จากเพลงเดิมซ้ำ
- เรียงลำดับเพลงจาก Pull Request ที่เปิดก่อน
- หากท่อนล่าสุดไม่สามารถต่อได้ หรือต่อยาก จะมีข้อยกเว้นให้ตามลำดับ
  - เพิ่มท่อนเพลงล่าสุดอีก 1-2 ประโยค เพื่อเปลี่ยนคำที่จะมาต่อ [ตัวอย่าง](https://github.com/narze/torpleng/pull/96)
  - หากไม่สามารถเพิ่มท่อนเพลงได้ อนุโลมให้ใช้คำที่ 2 หรือ 3 ของเพลงที่มาต่อได้ โดยใส่วงเล็บครอบคำที่ข้ามไป [ตัวอย่าง](https://github.com/narze/torpleng/pull/27)
  - ให้นำท่อนล่าสุดออกและเปลี่ยนเพลงได้ (ไม่แนะนำ เพราะเป็นการลบเพลงของคนอื่น)

## Pull Request

เปิด Pull Request ด้วยข้อมูลดังนี้ และใช้ชื่อเพลงเป็น Title

- เนื้อเพลงที่นำมาต่อ
- ชื่อเพลง
- ชื่อศิลปิน หรือวง
- ลิงก์ของคลิป Youtube พร้อมเวลาของท่อนเพลงที่นำมาต่อ โดยตัด Query String อื่นๆ ออก เช่น https://www.youtube.com/watch?v=T6F6hOKPCo4&t=71

ตัวอย่าง : `ดีแล้ว ที่เธอกระทำอยู่ทุกวันนี้ [สหายแห่งสายลม - ดีแล้ว](https://youtu.be/52rn8wsfxSM?t=39)`

## Features

- [x] Render with HTML (Vue.js) - Done by @neizod :pray:
- [ ] Validate format with Github Actions

## Entries

- ขวัญเจ้าเอยขวัญมาใยหนอล่องลอยหลุดไป อยู่ที่ไหนช่วยบอกได้ไหมใจ ใยถึงไม่คืนกลับมา [Palmy - ขวัญเอยขวัญมา](https://youtu.be/T6F6hOKPCo4?t=71)
- กลับมาได้หรือเปล่า กลับมาหาฉันทีได้ไหมคนดี [2 Day ago Kids - กลับมา](https://youtu.be/8M9N_eZh4KQ?t=70)
- ดีแล้ว ที่เธอกระทำอยู่ทุกวันนี้ [สหายแห่งสายลม - ดีแล้ว](https://youtu.be/52rn8wsfxSM?t=39)
- วันนี้ วันไหน อยากให้เธอมั่นใจ ว่าไม่ว่าเธอฝันอย่างไหน แม้มันจะไกลสุดไกลเท่าไร [Bodyslam - ทางของฉัน ฝันของเธอ](https://youtu.be/TgvXisKG2CY?t=47)
- เท่าไหร่ก็ไม่จำ ไม่สำคัญ แค่ฉันลืมตามาพบเธอ เหมือนแสงส่องทาง ที่ดูงดงาม เหมือนเป็นคำถาม ที่คำตอบก็คือเธอ [POTATO - เท่าไหร่ไม่จำ](https://youtu.be/UHKS37Inpdc?t=203)
- เธอ เธอยังคิดถึงฉันไหม เมื่อสองเรานั้นยังคงห่างไกล เมื่อเวลาพาเราให้ไกลกัน รู้บ้างไหมคนไกลยังคงหวั่นไหว เมื่อเขามองดูภาพเธอทีไร น้ำตามันยังไหลออกมา [COCKTAIL - เธอ](https://youtu.be/nY9sHiZ4bTU?t=88)
- มาทำไมให้อายบ้านนา เล่านวลน้อง ไม่ต้องกลับคืนมา [ทิดเซียง - กลับมาทำไม](https://youtu.be/tw5LTC__YWk?t=24)
- มารักทำไมตอนนี้ ตอนที่จะเสียฉันไป ทั้งๆ ที่ฉันทุ่มให้หมดใจ แต่เธอกลับทิ้งมัน [Am Fine - มารักทำไมตอนนี้](https://youtu.be/maz6gnq-n6g?t=12)
- มันเจ็บจะขาดใจอยู่ตรงหน้าเธอ แต่ต้องเก็บไว้ไม่แสดงว่าเสียใจ [Pancake - ขาดใจ](https://youtu.be/l9MRG7XV3V0?t=43)
- ใจมันยังเกเรเสมอไม่เคยจะเชื่อฟัง [Nice 2 Meet U - ใจเกเร](https://youtu.be/zDQeip3CPzI?t=103)
- ฟังเสียงใครต่อใครมากกว่าหัวใจตัวเราเองสวยงามคนเราแล้วแต่ใจใคร [SIN feat. โอม Cocktail - ฟัง](https://youtu.be/f05VJ1moOKE?t=162)
- ใครกันที่ทำให้ฉันรัก ใครกันที่มาอยู่ในความฝัน คนที่ฉันคิดถึงอยู่ทุกวัน ก็ใครคนนั้น ฉันเรียกว่าเธอ [ALL KAMIKAZE - รักฉันเรียกว่าเธอ](https://youtu.be/iRCb_PodGfQ?t=13)
- เธอยังคิดถึงฉันทุกนาทีอยู่หรือเปล่า เธอยังจำเรื่องเราในวันวานได้หรือไม่ เธอยังมีใจให้ฉันคนเดียว ยังรอฉันแค่คนเดียว เธอยังคงเป็นเหมือนเดิมอยู่ใช่ไหม ช่วยบอกให้รู้ที [POTATO - เธอยัง](https://www.youtube.com/watch?v=bNVxKaPxr6w&t=154s)
- ทีใครทีมัน หนทางยังอีกไกล คราวใครคราวมัน วัดกันไปจนวันสุดท้าย วันสุดท้าย ฮูว ฮูว.. [25hours - ทีใครทีมัน](https://youtu.be/hFse57E5Bw8?t=47)
- Hula Hula, Hoo la la la ไปทะเล Hoorey Hoorey, Yeah yeah ทุกเวลา [HULA HULA - 2005 ทิวา Hula Hula](https://youtu.be/BQHL4rwGc68?t=16)
- เวลาที่เราได้มองตากัน ไม่รู้ว่าเธอสงสัยฉันบ้างไหม ว่าใครคนนึงเฝ้ามองเธออยู่ และเขาก็อยากให้เธอได้รู้ใจ [Whal & Dolph - ใจเดียว](https://youtu.be/p5CsJurJ5Lo?t=89)
- ใจฉันไม่ได้รู้สึก เหมือนครั้งที่เราได้เจอกันเมื่อก่อนนั้น [Whal & Dolph - ไม่รู้ทำไม](https://youtu.be/CCxlsWFH3Nc?t=39)
- (เมื่อเรา)นั้นคิดจะปิด ทุกความสัมพันธ์ใดๆ ร่างกายมีเพียงแค่ฉันและเธอ [Musketeers - ใจความสำคัญ](https://youtu.be/rw1BXzZgoPc?t=37)
- เธอ เธอทั้งนั้นที่ทำ ให้ช่วงชีวิตของฉันน่าจดจำ [Groove Riders - เธอทั้งนั้น](https://youtu.be/f-eE1z1Pv7Y?t=40)
- จำเก่งจนไม่เคยลืมเธอ [F.HERO x Tilly Birds - จำเก่ง](https://youtu.be/7iSia7rb1PY?t=92)
- เธอไม่เคยเอ่ยคำว่ารักกัน มีแต่ฉันที่คิดไปฝ่ายเดียว ที่อยู่กับฉันใช้เวลาด้วยกัน นั่นเพียงฉันแค่คิด [ส้ม มารี - หรือฉันคิดไปเอง](https://youtu.be/UfgPHAZD5e0?t=65)
- คิด(แต่ไม่) ถึง คิด คิด(แต่ไม่) ถึงเธอ [Tilly Birds - คิด(แต่ไม่)ถึง](https://youtu.be/dJ9uVVNWClk?t=38)
- เธอคงไม่รู้ ว่าฉันเองยังไม่มีใคร หากเป็นเธอ ก็คงเข้าที เธออาจจะมีใคร คนนั้นที่แสนดี [LOSO - ฝนตกที่หน้าต่าง](https://youtu.be/SXy-v1KbF4k?t=53)
- ดีแล้วได้อะไร เมื่อใจทั้งใจ เธอให้เขา [KOOKKI - ดีแล้วได้อะไร](https://youtu.be/Kzr04RysKdI?t=33)
- เขาเดินจากไปแล้วไม่ต้องคิดถึง ไม่ต้องนึกถึงเขาอีกแล้ว [wonderframe - เขาไปแล้ว](https://youtu.be/paIrJvhXFXU?t=71)
- แล้วฉันเลือกอะไรได้ไหม เลือกให้เธอไม่ไปได้หรือเปล่า [ZAZA - เลือกได้ไหม](https://youtu.be/xoP_kqiqRgM?t=112)
- เปล่า ไม่มีเขานอกเหนือจิตใจ ไม่มีรัก จะหลงผู้ใด [สุนทราภรณ์ - เปล่า](https://youtu.be/CsIdMaYOQZk?t=53)
- ผู้ใดเข้ามาไม่เคยไหวหวั่น เหมือนใจฉันเกิดมาเพื่อเป็นของเธอ [ไอซ์ ศรัณยู - บุพเพสันนิวาส](https://youtu.be/uNWIeZWD4sw?t=82)
- เธอจะรักฉันได้ไหม ถ้าเธอยังไม่รักใคร อยากให้เธอเปิดใจให้กัน [INSTINCT - เธอจะรักฉันได้ไหม](https://youtu.be/zJ0YMTvh3d4?t=70)
- กัญชามาแล้ว มาแล้วมาช่วยผู้คนที่ทุกข์ทน ไม่ว่ารวยหรือจน ก็ใช้ได้เพียงป้ายใต้ลิ้นก็พอ [เล็ก คาราบาว - กัญชามาแล้ว](https://youtu.be/Vft3czE3UQc?t=79)
- พอแล้วพอ พอฉันพอดีกว่า คิดไปเองทำให้ใจต้องเจ็บ สุขเพียงสุขเล็กน้อยยามพบคนถูกใจ แต่พอเจ็บมันเจ็บเกินใครเป็นเพราะใจเราบางเหลือเกิน [Joe Pause - ใจบางบาง](https://youtu.be/bJJ4MmIElfA?t=95)
- เกินกว่าคำว่ารัก มันมากกว่าคำว่าผูกพัน แค่พูดว่าเราเป็นเพื่อนกัน เท่านั้นพอ [หั่ง - เกินกว่ารัก มากกว่าผูกพัน](https://youtu.be/K_ygchXBLGg?t=55)
- พอเสียที กับชีวิตที่ต้องมีเธอต่อไป [Atom ชนกันต์ - พอ](https://youtu.be/4_fRHGZdkuA?t=122)
- ไปทั้งหัวใจเลย เธอไม่ต้องกังวล ความรู้สึกนี้ไม่ต้องใช้ช้อนคน [โอมงกะลงปง x ตะมู่ยคริ x ต๊ะอิ๊อึอัส feat. สมปองงานวัด - แทนบ๋อย](https://youtu.be/o8-Bj5ACAMw?t=80)
- (เพราะ) คนไม่จำเป็นก็ต้องเดินจากไป ถึงแม้ว่าภายในใจจะรักเธอแค่ไหน [Getsunova - คนไม่จำเป็น](https://youtu.be/fmAEiuuoc_0?t=58)
- ไหนว่าจะไม่หลอกกัน ไหนว่าเธอจะมีฉัน ไหนว่าเธอจะเป็นเหมือนเก่า [SILLY FOOLS - ไหนว่าจะไม่หลอกกัน](https://www.youtube.com/watch?v=H24s52FrRNg&t=130)
- (รัก) เก่าเก่า หนทางใหม่ๆ จะเลือกอย่างไหน เธอก็คงรู้เอง [Soul After Six - รักเก่าๆ](https://youtu.be/beVDtbbAJ5s?t=74)
- (บอกตัว) เองว่าเราต้องลืมเรื่องราวที่ผ่าน แม้ความจริงทรมานและไม่มีวันไหนไม่คิดถึงเธอ [ROOM39 Feat.โป่ง ปฐมพงศ์ (โป่ง หินเหล็กไฟ) - บอกตัวเอง | Remind](https://youtu.be/5VrXPPKVb4g?t=109)
- เธอคนเดียว เธอคือนางฟ้าในใจ คอยนำทางคนที่อ้างว้างเดียวดาย เปิดใจ ให้พบรักแท้มีจริง จากดวงใจ ที่เปี่ยมความหมาย [Clash - เธอคือนางฟ้าในใจ](https://youtu.be/nmVrMXPCtN4?t=65)
- ไม่ทราบมันเป็นไร ไม่รู้ว่ามาไง อาการรักเธอ [ไอ..น้ำ - รักคนมีเจ้าของ](https://youtu.be/wadd_1CR5DA?t=45)
- เธอสวย ทุกนาทีที่เคยสัมผัส รู้ทันทีว่าเธอคือคนพิเศษ [Double You - เธอสวย](https://youtu.be/ecD7rrzQWFg?t=43)
- เธอคือคนพิเศษ เสกให้ใจของฉัน โบกปีกบินสู่ฟ้า [Calories Blah Blah - คนพิเศษ](https://youtu.be/oE8kMw9QUs8?t=15)
- ฟ้า ที่ยังรอดวงตะวันขึ้นมาใหม่ ไม่ต่างสักเท่าไรกับตัวฉัน ที่ยังรอดวงตะวันของหัวใจ ให้คืนมาพบกัน [นัท มีเรีย - ฟ้ากับตะวัน](https://youtu.be/dPOLu7KlKLM?t=75)
- (ที่พาเรา) พบกัน แล้วเวลา ก็พาเราจากกัน [Thaitanium - สบายดีหรือเปล่า 2017](https://youtu.be/Tk2ojsflPws?t=73)
- จากกันไปเสียนาน ได้เจอเธออีกครั้ง ฉันดีใจอย่างบอกไม่ถูก [Raptor - จำฉันได้ไหม](https://youtu.be/oycSIZvXz04?t=34)
- ถูกแล้วฉันนี่ไง ตัวแทนของคําว่าดีไม่พอ [ว่าน ธนกฤต - เดคิสุงิ](https://youtu.be/uQkAvzsl2zQ?t=58)
- พอเถอะพอแล้วพอ พอเถอะควรพอได้แล้ว [MEAN - พอเถอะ](https://youtu.be/3SAa6uca2IA?t=62)
- แล้วมันจะผ่านไปด้วยดี แล้วใจของเธอจะเปลี่ยนไป แล้ววันหนึ่ง เขาจะหายไป แม้วันนี้จะยังรู้สึก [ป๊อบ ปองกูล - ปล่อย](https://youtu.be/cF1zMxjKApc?t=101)
- (ฉัน) รู้สึกไม่ดี ฉันเป็นห่วงเธอ เธออยากให้ฉันอยู่ด้วยไหม อยากให้ฉันอยู่ด้วยไหมเธอ [อัสนี วสันต์ - อยากให้อยู่ด้วยไหม?](https://youtu.be/GNzQeUceJX8?t=56)
- เธอคงเคยเห็นฉันผ่านผ่านตา ให้รู้ว่าชอบชอบเธอ [Three Man Down - ผ่านตา (Everyday)](https://youtu.be/7-kQeLoDxBU?t=69)
- เธอคือหวานเย็น ดับร้อนข้างในหัวใจที่ฉันมี [Mild - หวานเย็น](https://youtu.be/I2VIv-QJ6xA?t=67)
- มีเรื่องราวมากมาย ที่ไม่มีใครได้ฟัง คำพูดนับร้อยพัน ที่ต้องการเอื้อนเอ่ย [Musketeers - ของขวัญ](https://youtu.be/NZ-_o6y5FaI?t=21)
- เอ่ยคำลา ว่าจะกลับมาเร็ววัน เพื่อพบกัน ใจมั่นสัญญา ความจริงใจที่มี ดั่งราตรีมีเพียงแสงจันทร์ [เรนโบว์ - ยากยิ่งนัก](https://youtu.be/Zekv0D89YtE?t=72)
- (ในคืน) แสงจันทร์ส่อง ระยิบตาดวงดารา ดั่งดวงตานางฟ้าจ้องมอง เป็นพยานในยามราตรีบรรเลงขับขาน เพลงรักเพื่อเรา [Cocktail feat. นิว นภัสสร - งานเต้นรำในคืนพระจันทร์เต็มดวง](https://youtu.be/y04gImu0qiw?t=122)
- เรามาไกลเท่านี้ก็ดีเหลือเกิน ขอบใจนะที่เคยมีกันมันถึงเวลายอมรับความจริง [ฺBigAss - ลมเปลี่ยนทิศ](https://youtu.be/5H4Lg-rl58U?t=90)
- (มี) จริงหรือ รักแรกพบเพียงสบตาแค่หนึ่งครั้ง แค่แรกเห็นเดินผ่านมาไม่พูดจา ไม่ทักไม่ทาย ไม่รู้ว่าใคร เหตุใดจึงรักกัน [Tattoo Colour - รักแรกพบ](https://youtu.be/rc7KnQAh_1I?t=36)
- (เรา) กันเองอยู่แล้ว โธ่ เรื่องแค่นี้ไม่เห็นต้องปิด คนเราจะรัก ไม่ใช่เรื่องผิด บอกมาเถอะเธอคิดยังไง [กัน เดอะสตาร์ - กันเอง](https://youtu.be/MBWVdKl-W0s?t=49)
- ยังไง ยังไงดี กลัวเธอลำบากจังเลย ทำไงดี ทำไงดี กลัวเธอจะไม่เข้าใจ [Raptor - เกรงใจ](https://youtu.be/xq8zkaEGgo8?t=83)
- ใจนักเลงจึงปวดร้าวเจียนตาย ปล่อยเธอไปตามใจเธอต้องการ จะยอมให้สั่งและตัดสิน ว่าฉันต้องถูกทอดทิ้ง เรานั้นมันไม่อาจฝืนความจริง [พงษ์พัฒน์ วชิรบรรจง - ใจนักเลง](https://youtu.be/ebrQ8A8K7is?t=29)
- ความจริงในใจไม่เคยมีใครแทนที่ความรู้สึก ที่ฉันยังมีให้เธออยู่ เธอยังคงมาวนเวียนอยู่ในความฝันยามคำ่คืน ให้ฉันเองสับสนในใจ [Crescendo - ความจริงในใจ](https://youtu.be/jcHFVcHj_xE?t=171)
- ใจหนึ่งใจ จะต้องการอะไร ให้มันมากมาย ให้มันวุ่นวาย เพียงเธอนั้น ใส่ใจกันเบาเบา พอให้สองเรา ได้ทำอะไรมากมายในตอนนี้ [Singular - เบาเบา](https://youtu.be/k73IcXf4hK4?t=17)
- (เนื่องจาก) ตอนนี้ ฉันรู้สึกจิตใจมันอ่อนไหว อยากจะรู้ว่าเขาเป็นยังไง จากคำพูดวันนี้ [Pause - ดาว](https://youtu.be/n_NTET76qZU?t=55)
- วันนี้ที่เป็นวันแรกที่ฉัน จับมือของเธอ เรามองหน้ากัน แล้วฉันก็พูดคำว่ารักเธอ [เอก สุระเชษฐ์ - วันนี้เมื่อปีที่แล้ว](https://youtu.be/utV6qhUZErA?t=26)
- เธอทำให้ฉันรักเธอก่อนไม่อาจถอน หัวใจมันคอยแอบแอบมองแบบซึ้งซึ้ง เธอทำให้ฉันหลงใจอ่อนนอนกอดหมอนทุกคืน จะทนได้นานสักเท่าไหร่ หากคิดถึง…โอ๊ย…โอ๊ย [เบน ชลาทิศ - โอ๊ย โอ๊ย](https://youtu.be/4EJb35Uco0M?t=124)
- โอ๊ยยยย ก็แล้วจะทำยังไง กลายเป็นหมาหางกุด พวกมนุษย์ก็เลิกเลี้ยงดูแล ความจริงก็คงจะไม่แคร์แต่หมู่หมาก็งงงวย [Pause - หมา (นิทานมาหางกุด)](https://youtu.be/dnt1n1caiIc?t=78)
- งวยงงยิ่งนักใจเราต่างก็รัก รักกันสุดชีวา รอวันสุขสดใส เหมือนไฟคุคอยเวลา มีแววจะลุกไม่ช้า ไม่นาน [สวลี ผกาพันธุ์ - เหมือนตายจากกัน](https://youtu.be/EAZirAbBPRQ?t=14)
- ไม่นานก็ช้า ถึงหัวใจ ก็ต้องเป็นของของเธออยู่ดี ช่วยรอได้ไหมแค่รอก่อน รอไม่นานคนดี [เอ๊ะ จิรากร - ไม่ใช่ความลับ](https://youtu.be/488q2rxLUao?t=79)
- (โอ้) คนดีฉันคงได้บอกไปแล้ว ยังมีอีกหลายสิ่ง ที่ฉันยังไม่เคยพูดสักที และมีอีกหลายอย่าง ที่ไม่เคยทำจนวันนี้ รัก รักเธอ ทั้งหมดของหัวใจ สิ่งเหล่านั้นเก็บไว้ข้างใน [Pause - รักเธอทั้งหมดของหัวใจ (For my Brother)](https://youtu.be/AyLUSxspYAI?t=146)
- ในใจไม่เคยมีผู้ใด จนความรักเธอเข้ามา ทำให้ดวงตาฉันเห็นความสดใส ข้างกายไม่เคยมีผู้ใด จนความรักเธอเมตตา เป็นพลังให้ฉันสู้ต่อไป [Moderndog - ก่อน](https://youtu.be/Bn5JCe-7aIg?t=40)
- ไปสู่ความจริงที่ปวดใจ อยากฉุดรั้งยั้งเอาไว้ ไม่อยากให้เดินไปจนนาทีสุดท้าย ฉันก็รู้สักวันต้องจบลง และชีวิตก็คงกลับไปเหมือนเก่า ยื้อฉันยื้อ ไม่ให้เธอจากไป จะฉุดรั้งเอาไว้ให้เธอไม่ไปจากเรา [Flure - ยื้อ](https://www.youtube.com/watch?v=E0Yp5SdFjC4&t=135s)
- เราจะทำตามสัญญา ขอเวลาอีกไม่นาน แล้วแผ่นดินที่งดงามจะคืนกลับมา [อัสนี โชติกุล - คืนความสุขให้ประเทศไทย](https://youtu.be/nP8FPJXibtE?t=60)
- มาทำไม ไม่รักก็ไม่ต้องมา เป็นอะไร ไม่รักก็คงไม่มา มาทำไม ไม่รักก็ไม่ต้องมา เป็นอะไร ไม่รักก็คงไม่มา [เบิร์ด ธงไชย, จินตหรา พูนลาภ - มาทำไม](https://youtu.be/XR4BP3SfPPs?t=89)
- มานี่มา มานี่มา มานี่ ไหนเจ็บตรงไหน ปวดตรงไหน จะจูบตรงนั้นให้ความช้ำหมดไปเจอคนใจร้าย มาใช่ไหมเธอ คนที่ไม่รู้อะไรเลยว่าหากได้มองรอยยิ้มของเธอแค่หนึ่งครั้ง และจะให้ตายตรงนั้นก็ไม่เสียดาย [POLYCAT - มานี่มา](https://youtu.be/NG4xXB9A03Q?t=7)
- เสียดาย...ที่วันนี้ไม่มีเธออยู่ อยากจะทำทุกสิ่ง อยากจะทำทุกอย่าง หากจะพอมีหวัง ให้คืนวันมันย้อนไป [Bodyslam - เสียดาย](https://youtu.be/3Nf5HriW9XA?t=134)
- ไปเถอะเธอไปที่ที่ดีกว่า หากอยู่กับฉันเสียเวลา สุดท้ายไม่นานฉันคงเข้าใจ [Three Man Down - ไปเถอะเธอ](https://youtu.be/wexEbXItRIs?t=6)
- ใจหนอใจคน คงต้องหม่นหมองสุขที่เคยครอง ไม่ได้เป็นดังใจ [Slot Machine - ใจหนอใจ](https://youtu.be/JrU15mDzVx0?t=44)
- ใจสู้หรือเปล่า ไหวไหมบอกมา โอกาสของผู้กล้า ศรัทธาไม่มีท้อ [หิน เหล็ก ไฟ - ศรัทธา](https://youtu.be/4wdkhztdXmo?t=92)
- (แต่ถามว่า) ท้อไหม ฉันตอบเลยว่ามาก ยากเย็นจนเกินความเข้าใจ [เบิร์ด ธงไชย - ก้อนหินกับนาฬิกา](https://www.youtube.com/watch?v=2cmI4ldY3ek&t=87s)
- ใจและใจแค่ลองแลกกัน มันก็อาจะเกิดความสัมพันธ์ ความรู้สึกที่มีให้กัน อาจเป็นรัก ... เข้าสักวัน [Pause - สัมพันธ์](https://www.youtube.com/watch?v=qZNWorOwLYA&t=103s)
- วันเดือนปีเคยเป็นแค่เพียงสายลมผ่าน ใครคนหนึ่งทำเวลาฉันให้รู้สึกมีความหมาย [Scrubb - คู่กัน](https://www.youtube.com/watch?v=E4iYZy2UWiw&t=47s)
- (หมด)ความหมาย แต่บทแสดงยังหายใจอยู่ ถูกคนลบหลู่บาดใจทุกวัน ปิดฉากไปเสียดีกว่า แสดงเป็นคนไร้ค่า อาจมีสักวันเข้าใจมากกว่านี้ [เสือ ธนพล - รักคงยังไม่พอ](https://youtu.be/JXI21WGBItA?t=102)
- มากกว่านี้ ก็ชีวิตฉัน มันคงให้เธอได้เท่านี้ มากกว่านี้ก็คงจะมีแค่ลมหายใจ มากกว่านี้ก็ชีวิตฉัน กับเธอคงไม่มีความหมาย ต่อให้ฉันต้องตาย ก็คงยื้อไม่ได้ เมื่อความรักมันไม่มีค่าอะไร ที่เธอต้องการ [มากกว่านี้ก็ชีวิต - สำราญราษฎร์](https://youtu.be/6vVERqgAFwA?t=63)
- การเดินทางของฉันและเธอคือการเรียนรู้ การเรียนรู้ของเราสองคนคือความเข้าใจ เธอเข้าใจและฉันเข้าใจก็ทำให้เรามั่นใจ [ชาติ สุชาติ - การเดินทาง](https://youtu.be/Jy35oa5oFoY?t=48)
- (ไม่เอาอีกแล้วคน)ใจร้าย ที่ผ่านมาทุกที ต้องเจ็บปวดทุกที ทำไมชีวิตต้องเจอกับคนแบบนี้ [LIPTA Feat. Ink Waruntorn - เจอแต่คนใจร้าย](https://www.youtube.com/watch?v=DXPrQ4w-pSg&t=43s)
- นี่แหละคือความเสียใจ ความเสียใจมันเป็นอย่างนี้จำซะใหม่ ต้องเจ็บจนร้องไห้โดยไม่อาย ต้องช้ำทุรนทุรายขนาดนี้ [Potato - นี่แหละความเสียใจ](https://youtu.be/NSc5YSVQSNs?t=121)
- นี่ฉันเอง คนนี้ นี่ฉันเองคนเดิมที่ยังรักเธอ นี่ฉันรอที่จะได้เจอ ยังรอที่จะพบเธอ ไม่ว่านานแค่ไหน [Lipta Feat. Kob Flat Boy - นี่ฉันเอง](https://youtu.be/lFsXixn7PGY?t=7)
- ไหนใคร โน่นไง แฝงตัวร่มเงาไม้ใหญ่ ใช่ใครนกเขา คู่มัน เสียงใคร ไหนกัน เสียงนั่น อ๋อ นกมันพรอดคำรำพัน ฝากชีวันรักกันไงเล่า [เกษม คมสันต์/อัมพร แหวนเพชร - นกเขาคูรัก](https://youtu.be/O1f-X_vBcw8?t=103)
- (ใคร)เล่าเลยจะรู้ว่าความรัก แม้แรกเจอต่างคนไม่รู้จัก แต่ปักใจเพียงครั้งเดียว ติดในใจชั่วกาล ยามที่เราทั้งสองได้พานพบ ลบเรื่องราวอดีตที่ร้าวราน เธอคือความรักแท้ ที่ฉันหามาเนิ่นนาน [Billkin - กีดกัน (Skyline) OST.แปลรักฉันด้วยใจเธอ](https://www.youtube.com/watch?v=hJeEOzEZstU#t=13)
- (อยู่)นาน นาน ได้ไหม นาน นานจะเจอกันสักที ให้ฉันได้มีวันที่ดี อบอุ่นอย่างนี้ นาน นานได้ไหม แล้วค่อยลา [SIN - อยู่นานๆได้ไหม](https://youtu.be/1tyEOknorf0?t=126)
- (เว)ลาของเธอหมดแล้ว เธอทำให้ชายชราตัณหากลับ เธอน็อคชายฉกรรจ์นอนนับดาวเดือน [หิน เหล็ก ไฟ - นางแมว](https://youtu.be/Dbo8MdJ6DME?t=80)
- เดือน 9 เช้าที่ 11 World Trade กลายเป็นความหลัง ยิ่งสูงก็ยิ่งล้มดัง ยิ่งใหญ่ ก็ยิ่งล้มตาย [คาราบาว - เดือน 9 เช้า 11](https://youtu.be/8FO2W1Davgc?t=52)
- ตายทั้ง เป็น ช้ำครั้งนี้ฉันคงจะทนไม่ได้นาน หัวใจคงจะโดนธาตุไฟรัก เผาแหลกลาญ นอนไหม้เกรียมตายทั้งเป็น [แจ้ ดนุพล แก้วกาญจน์ - ตายทั้งเป็น](https://youtu.be/WhBFGW95ef8?t=40)
- เป็นทุกอย่างให้เธอแล้ว แม้ว่าเธอไม่เคยเป็นอะไรกับฉันเลย ฉันก็แค่คนหนึ่ง ที่เธอต้องการในบางครั้ง ได้อยู่ตรงนี้ก็ดีแค่ไหน [Room39 - เป็นทุกอย่าง](https://youtu.be/totIVAi9BUc?t=119)
- ไหนว่าจะจำ จะจำแล้วไงไม่จำ พี่เชื่อถ้อยคำแม้จำติดใจ ไม่ลืม มิลืมไม่ลืม ให้จำคืนหนึ่งคืนนั้น สวรรค์อันเคยดูดดื่ม แล้วใครที่ลืมถ้อยคำ [ดิอิมพอสซิเบิ้ล (The Impossible) - ไหนว่าจะจำ](https://www.youtube.com/watch?v=_gm91BHZ6Sw&t=9)
- คำว่ารักมันกลายเป็นฝุ่นไปแล้ว อะไรที่หวังก็พังไปตั้งนานแล้ว แต่ชีวิตไม่รู้ทำไม มันยังคงค้างคาใจ ไม่มีวันใดที่ฉันไม่จดจำ [Big Ass - ฝุ่น (Official MV)](https://youtu.be/n3tdS0Xrl7U?t=33)
- จำไว้ว่าอย่านะ อย่าให้เป็นอย่างนั้น อย่าเป็นอย่างฉัน โอ้ว อย่านะ อย่าให้เป็นอย่างฉัน อย่าเลือกยอมให้อารมณ์ หวั่นไหวชั่วคราวนั้นอยู่ เหนือกว่าเหตุผล [Flure - อย่า](https://www.youtube.com/watch?v=W8X58yiOhu0&t=206s)
- (กี่)เหตุผลของคนหมดใจ ลงท้ายแปลได้คำเดียวว่าเลิกกัน บอกมาเลยได้ไหมว่าไม่รัก ว่าไม่รัก [Pancake - เหตุผลของคนหมดใจ (Official MV)](https://youtu.be/_kPWnpT2O_E?t=174)
- รักในครั้งนี้ยังไม่จบลงใช่ไหม ไม่ว่าอะไรเปียกปอนฉันภาวนา ให้เป็นเพราะฝนอย่าให้ต้องเปียกเพราะน้ำตา มีเพลงผิดหวังที่เรา ได้เปิดมันฟังด้วยกัน อย่าปล่อยให้เป็นแบบนั้นได้โปรด [POLYCAT - เป็นเพราะฝน](https://youtu.be/qOjlSEkUilc?t=64)
- โปรดส่งใครมาเป็นคู่กัน ที่ไม่ทำให้ฉันเดียวดาย ช่วยมาทำให้ฉันเข้าใจ และได้รักใคร [Instinct - โปรดส่งใครมารักฉันที](https://youtu.be/EDF7riZLhNA?t=81)
- ใครกันเล่าจะมาเป็นคู่กัน ก็ใครกันเล่าจะเดินอยู่ข้างกัน จะมีบ้างไหมแค่ใครซักคน ที่ไม่มองข้ามคนอย่างฉัน [เอก สุระเชษฐ์  - ใครสักคน](https://youtu.be/HxJdX3rFoGs?t=127)

- ฉันเหมือนคนไม่มีกําลัง และหมดแรงจะยืนจะลุกจะเดินไป [แทงข้างหลัง..ทะลุถึงหัวใจ - อ๊อฟ ปองศักดิ์](https://youtu.be/CtLxoB1sQjk?t=106)
- ไปเถอะเธอ ไปที่ที่ดีกว่า หากอยู่กับฉันเสียเวลา สุดท้ายไม่นานฉันคงเข้าใจ [ไปเถอะเธอ - Three Man Down](https://youtu.be/wexEbXItRIs?t=6)
- ใจ ฉันเคยถูกทิ้งเพียงลำพัง ก็รักใครมาแล้วตั้งกี่ครั้ง ผิดหวังมากี่หน เมื่อรักคนที่เขาไม่ได้รักเราก็ช้ำใจอย่างนี้ [คนที่ถูกรัก - bodyslam](https://youtu.be/7TVdbOakiRo?t=29)
<!-- เพิ่มเพลงด้านบนบรรทัดนี้ format : เนื้อเพลง [ศิลปิน/วง - ชื่อเพลง](Youtube link with timestamp) -->
