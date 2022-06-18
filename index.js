const nodemailer = require('nodemailer')

async function senmail () {
    let transporter = nodemailer.createTransport({
      host: 'smtp.beget.com',
      port: 465,
      secure: true,
      auth: {
        user: 'test@powernether.ru',
        pass: 'K6lm%GiH',
      },
    })
    
    let result = await transporter.sendMail({
      from: '"Node js" <test@powernether.ru',
      to: 'slavacraft07@gmail.com, Slavacraft@yandex.ru, powernether@mail.ru',
      subject: 'Шаблон 3',
    //   html:
    //     `
    //     <div style="width: 100%; padding-bottom: 56px; background: #F5F5F7;">
    //         <div style="width: 600px; padding: 40px 32px; margin: 0 auto; background: #FFFFFF;">
    //             <img src="https://dev.powernether.ru/images/icon.png" alt="image" class="mail__image" style="display: block; width: 400px; height: 200px; object-fit: contain; margin: 0 auto 32px;"/>
    //             <p style="font-family: 'Arial'; font-weight: 700; font-size: 26px; line-height: 36px; text-align: center; margin: 0 0 12px;">Текстовый заголовок</p>
    //             <p style="font-family: 'Arial'; font-weight: 400; font-size: 20px; line-height: 28px; text-align: center; margin: 0 0 32px;">Текст лида поясняющий заголовок</p>
    //             <hr style="width: 100%; height: 1px; background: #DEE0E1; border: none; margin: 0 0 32px;">
    //             <p style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0 0 12px;">Здравствуйте, Username.</p>
    //             <p style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0 0 32px;">
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    //                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    //                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
    //             </p>
    //             <p style="font-family: 'Arial'; font-weight: 700; font-size: 20px; line-height: 28px; color: #333333; margin: 0 0 12px;">Текстовый заголовок</p>
    //             <ul style="list-style: none; padding: 0; margin: 0 0 32px;">
    //                 <li style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0 0 8px;">
    //                     <span style="float:left; display: block; width: 8px; height: 8px; border-radius: 50%; background: #FEDC35; margin: 7px 16px 0 0;"></span>
    //                     lorem ipsum dolor sit amet, consectetur adipiscing elit
    //                 </li>
    //                 <li style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0 0 8px;">
    //                     <span style="float:left; display: block; width: 8px; height: 8px; border-radius: 50%; background: #FEDC35; margin: 7px 16px 0 0;"></span>
    //                     lorem ipsum dolor sit amet, consectetur adipiscing elit
    //                 </li>
    //                 <li style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0 0 8px;">
    //                     <span style="float:left; display: block; width: 8px; height: 8px; border-radius: 50%; background: #FEDC35; margin: 7px 16px 0 0;"></span>
    //                     lorem ipsum dolor sit amet, consectetur adipiscing elit
    //                 </li>
    //                 <li style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0 0 8px;">
    //                     <span style="float:left; display: block; width: 8px; height: 8px; border-radius: 50%; background: #FEDC35; margin: 7px 16px 0 0;"></span>
    //                     lorem ipsum dolor sit amet, consectetur adipiscing elit
    //                 </li>
    //             </ul>
    //             <p style="font-family: 'Arial'; font-weight: 700; font-size: 20px; line-height: 28px; color: #333333; margin: 0 0 20px;">Текстовый заголовок</p>
    //             <ul style="list-style: none; padding: 0; margin: 0 0 32px;">
    //                 <li style="min-height: 60px; font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 8px 0 0;">
    //                     <span style="float:left; display: block; width: 60px; border-radius: 24px; background: #F4F5F6; padding: 18px 0; margin: 0 16px 0 0; font-family: 'Arial'; font-size: 24px; line-height: 24px; text-align: center;">
    //                         1
    //                     </span>
    //                     lorem ipsum dolor sit amet, consectetur adipiscing elit
    //                 </li>
    //                 <hr style="width: 100%; height: 1px; background: #DEE0E1; border: none; margin: 24px 0 ;">
    //                 <li style="min-height: 60px; font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 8px 0 0;">
    //                     <span style="float:left; display: block; width: 60px; border-radius: 24px; background: #F4F5F6; padding: 18px 0; margin: 0 16px 0 0; font-family: 'Arial'; font-size: 24px; line-height: 24px; text-align: center;">
    //                         2
    //                     </span>
    //                     lorem ipsum dolor sit amet, consectetur adipiscing elit
    //                 </li>
    //                 <hr style="width: 100%; height: 1px; background: #DEE0E1; border: none; margin: 24px 0 ;">
    //                 <li style="min-height: 60px; font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 8px 0 0;">
    //                     <span style="float:left; display: block; width: 60px; border-radius: 24px; background: #F4F5F6; padding: 18px 0; margin: 0 16px 0 0; font-family: 'Arial'; font-size: 24px; line-height: 24px; text-align: center;">
    //                         3
    //                     </span>
    //                     lorem ipsum dolor sit amet, consectetur adipiscing elit
    //                 </li>
    //                 <hr style="width: 100%; height: 1px; background: #DEE0E1; border: none; margin: 24px 0 ;">
    //                 <li style="min-height: 60px; font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 8px 0 0;">
    //                     <span style="float:left; display: block; width: 60px; border-radius: 24px; background: #F4F5F6; padding: 18px 0; margin: 0 16px 0 0; font-family: 'Arial'; font-size: 24px; line-height: 24px; text-align: center;">
    //                         4
    //                     </span>
    //                     lorem ipsum dolor sit amet, consectetur adipiscing elit
    //                 </li>
    //             </ul>
    //             <table width="100%" border="0" cellspacing="0" cellpadding="0">
    //                 <tr>
    //                     <td align="center">
    //                         <a href="#" style="font-family: 'Arial'; font-style: normal; font-weight: 400; font-size: 17px; line-height: 56px; text-decoration: none; color: #FFFFFF; display: inline-block; width: fit-content; background: #5947B3; border-radius: 4px; margin: 0 auto 64px; padding: 0 32px;">
    //                             Primary Button
    //                         </a>
    //                     </td>
    //                 </tr>
    //             </table>
    //             <hr style="width: 100%; height: 1px; background: #DEE0E1; border: none; margin: 0 0 32px;">
    //             <p style="font-family: 'Arial'; font-weight: 400; font-size: 13px; line-height: 20px; text-align: center; color: #ADADAD; margin: 0 0 32px;">
    //                 Вы получили данное информационное сообщение, так как являетесь клиентом 
    //                 Company. Если вы хотите отказаться от получения писем по электронной почте, 
    //                 перейдите по <a href="#" style="color: #ADADAD; text-decoration: underline;">ссылке</a>.
    //             </p>
    //             <a href="https://homehunter.ru" style="display: block;">
    //                 <img src="https://dev.powernether.ru/images/logo.png" alt="logo" style="display: block; width: auto; height: 40px; margin: 0 auto;">
    //             </a>
    //         </div>
    //     </div>
    //     `,
        // html: 
        //     `
        //     <div style="width: 100%; padding: 24px 0; background: #F5F5F7;">
        //         <div style="width: 600px; margin: 0 auto; background: #FFFFFF;">
        //             <div style="padding: 16px 32px;">
        //                 <a href="https://homehunter.ru" style="display: block;">
        //                     <img src="https://dev.powernether.ru/images/logo.png" alt="logo" style="display: block; width: auto; height: 40px; margin: 0;">
        //                 </a>
        //             </div>
        //             <hr style="width: 100%; height: 1px; background: #DEE0E1; border: none; margin: 0;">
        //             <div style="padding: 40px 32px;">
        //                 <p style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0 0 12px;">
        //                     Добрый день!
        //                 </p>
        //                 <p style="font-family: 'Arial'; font-weight: 700; font-size: 26px; line-height: 36px; color: #333333; margin: 0 0 32px;">
        //                     Чтобы подтвердить адрес электронной почты, используйте уникальный код, указанный ниже
        //                 </p>
        //                 <p style="display: block; margin: 0 0 32px; background: #F8F7FA; border-radius: 16px; font-family: 'Arial'; font-style: normal; font-weight: 400; font-size: 36px; line-height: 100px; text-align: center; letter-spacing: 1px; color: #333333;">
        //                     478152
        //                 </p>
        //                 <p style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0 0 32px;">
        //                     Если вы не запрашивали подтверждение адреса электронной почты на нашем сервисе, пожалуйста, проигнорируйте это письмо.
        //                 </p>
        //                 <hr style="width: 100%; height: 1px; background: #DEE0E1; border: none; margin: 0 0 32px;">
        //                 <p style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0;">
        //                     <b>Всегда рады помочь вам!</b>
        //                     Если повились вопросы или возникли проблемы, напишите в 
        //                     <a href="#" target="_blank" style="text-decoration: none; color: #5947B3;">@homehunter</a> 
        //                     или воспользуйтесь телеграм-ботом 
        //                     <a href="#" target="_blank" style="text-decoration: none; color: #5947B3;">@homehunter_bot</a> 
        //                     В самом крайнем случае пишите на почту
        //                     <a href="mailto:support@homehunter.ru" target="_blank" style="text-decoration: none; color: #5947B3;">support@homehunter.ru</a> 
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        //     `
        // html: 
        //     `
        //     <div style="width: 100%; padding: 24px 0; background: #F5F5F7;">
        //         <div style="width: 600px; margin: 0 auto; background: #FFFFFF;">
        //             <div style="padding: 16px 32px;">
        //                 <a href="https://homehunter.ru" style="display: block;">
        //                     <img src="logo.png" alt="logo" style="display: block; width: auto; height: 40px; margin: 0;">
        //                 </a>
        //             </div>
        //             <hr style="width: 100%; height: 1px; background: #DEE0E1; border: none; margin: 0;">
        //             <div style="padding: 40px 32px;">
        //                 <p style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0 0 12px;">
        //                     Добрый день!
        //                 </p>
        //                 <p style="font-family: 'Arial'; font-weight: 700; font-size: 26px; line-height: 36px; color: #333333; margin: 0 0 32px;">
        //                     Ваш аккаунт успешно зарегистрирован!
        //                 </p>
        //                 <p style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0 0 32px;">
        //                     Подбирайте недвижимость с помощью расширенных фильтров, используйте базу заявок и коллекции. Поиск и подбор недвижимости стал ещё проще.
        //                 </p>
        //                 <a href="#" target="_blank" style="font-family: 'Arial'; font-style: normal; font-weight: 400; font-size: 17px; line-height: 56px; text-align: center; text-decoration: none; color: #FFFFFF; display: block; background: #5947B3; border-radius: 12px; margin: 0 auto 48px; padding: 0 32px;">
        //                     Перейти на homehunter.ru
        //                 </a>
        //                 <div style="display: block; margin: 0 0 32px; padding: 32px; background: #F8F7FA; border-radius: 16px;">
        //                     <div style="margin: 0 0 12px;">
        //                         <img src="Fire.png" alt="Fire" style="float: left; display: block; width: 28px; height: 28px; margin: 0 16px 0 0;">
        //                         <p style="font-family: 'Arial'; font-weight: 700; font-size: 20px; line-height: 28px; color: #333333; margin: 0;">База заявок</p>
        //                     </div>
        //                     <p style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0;">
        //                         Воспользуйтесь базой заявок, чтобы получить доступ к расширенной базе лотов. В базе размещены лоты, которые скрыты от покупателей на сайте. Так же вы можете оставить заявку по своим предпочтениям.
        //                     </p>
        //                 </div>
        //                 <div style="display: block; margin: 0 0 32px; padding: 32px; background: #F8F7FA; border-radius: 16px;">
        //                     <div style="margin: 0 0 12px;">
        //                         <img src="Thumbs-Up.png" alt="Thumbs Up" style="float: left; display: block; width: 28px; height: 28px; margin: 0 16px 0 0;">
        //                         <p style="font-family: 'Arial'; font-weight: 700; font-size: 20px; line-height: 28px; color: #333333; margin: 0;">Актуальная информация</p>
        //                     </div>
        //                     <p style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0;">
        //                         Воспользуйтесь базой заявок, чтобы получить доступ к расширенной базе лотов. В базе размещены лоты, которые скрыты от покупателей на сайте. Так же вы можете оставить заявку по своим предпочтениям.
        //                     </p>
        //                 </div>
        //                 <p style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0 0 32px;">
        //                     Если вы не запрашивали подтверждение адреса электронной почты на нашем сервисе, пожалуйста, проигнорируйте это письмо.
        //                 </p>
        //                 <hr style="width: 100%; height: 1px; background: #DEE0E1; border: none; margin: 0 0 32px;">
        //                 <p style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0;">
        //                     <b>Всегда рады помочь вам!</b>
        //                     Если повились вопросы или возникли проблемы, напишите в 
        //                     <a href="#" target="_blank" style="text-decoration: none; color: #5947B3;">@homehunter</a> 
        //                     или воспользуйтесь телеграм-ботом 
        //                     <a href="#" target="_blank" style="text-decoration: none; color: #5947B3;">@homehunter_bot</a> 
        //                     В самом крайнем случае пишите на почту
        //                     <a href="mailto:support@homehunter.ru" target="_blank" style="text-decoration: none; color: #5947B3;">support@homehunter.ru</a> 
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        //     `
        // html: `
        //     <div style="width: 100%; padding: 24px 0; background: #F5F5F7;">
        //         <div style="width: 600px; margin: 0 auto; background: #FFFFFF;">
        //             <div style="padding: 16px 32px;">
        //                 <a href="https://homehunter.ru" style="display: block;">
        //                     <img src="logo.png" alt="logo" style="display: block; width: auto; height: 40px; margin: 0;">
        //                 </a>
        //             </div>
        //             <hr style="width: 100%; height: 1px; background: #DEE0E1; border: none; margin: 0;">
        //             <div style="padding: 40px 32px;">
        //                 <p style="font-family: 'Arial'; font-weight: 700; font-size: 26px; line-height: 36px; color: #333333; margin: 0 0 32px;">
        //                     Цены на эти лоты изменились
        //                 </p>
        //                 <p style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0 0 32px;">
        //                     Подбирайте недвижимость с помощью расширенных фильтров, используйте базу заявок и коллекции. Поиск и подбор недвижимости стал ещё проще.
        //                 </p>
        //                 <div>
        //                     <img src="img.png" alt="img" style="display: block; width: 166px; height: 166px; float: left; margin: 0 16px 0 0;">
        //                     <a href="#" style="display: block; font-family: 'Arial'; font-style: normal; font-weight: 700; font-size: 20px; text-decoration: none; line-height: 28px; color: #5947B3; margin: 0 0 12px;">10-комн. кв, 1 880.6 м2, этаж 10/24</a>
        //                     <p style="font-family: 'Arial'; font-style: normal; font-weight: 400; font-size: 15px; line-height: 22px; color: #808080; height: 60px; margin: 0 0 12px;">
        //                         ЗАО, Очаково-Матвеевское, <br>
        //                         Нежинская улица, 1, корп. 2 м. <br> 
        //                         Деловой центр  ~3 мин. пешком
        //                     </p>
        //                     <table>
        //                         <tr>
        //                             <td>
        //                                 <img src="arrow.png" alt="arrow" style="display: block; width: 8px; height: 6px; float: left;">
        //                             </td>
        //                             <td>
        //                                 <p style="font-family: 'Arial'; font-style: normal; font-weight: 700; font-size: 17px; line-height: 24px; color: #11BB88; margin: 0;">
        //                                     -10.0%
        //                                 </p>
        //                             </td>
        //                         </tr>
        //                     </table>
        //                     <p style="font-family: 'Arial'; font-style: normal; font-weight: 700; font-size: 17px; line-height: 24px; color: #333333; margin: 0;">150 000 000 → 135 000 000 ₽</p>
        //                 </div>
        //                 <hr style="width: 100%; height: 1px; background: #DEE0E1; border: none; margin: 24px 0; border-radius: 16px;">
        //                 <div>
        //                     <img src="img.png" alt="img" style="display: block; width: 166px; height: 166px; float: left; margin: 0 16px 0 0;">
        //                     <a href="#" style="display: block; font-family: 'Arial'; font-style: normal; font-weight: 700; font-size: 20px; text-decoration: none; line-height: 28px; color: #5947B3; margin: 0 0 12px;">10-комн. кв, 1 880.6 м2, этаж 10/24</a>
        //                     <p style="font-family: 'Arial'; font-style: normal; font-weight: 400; font-size: 15px; line-height: 22px; color: #808080; height: 60px; margin: 0 0 12px;">
        //                         Очаково-Матвеевское, Нежинская улица, 1к2 м. <br>
        //                         Третьяковская  ~20 мин. пешком
        //                     </p>
        //                     <table>
        //                         <tr>
        //                             <td>
        //                                 <img src="arrowUp.png" alt="arrow" style="display: block; width: 8px; height: 6px; float: left;">
        //                             </td>
        //                             <td>
        //                                 <p style="font-family: 'Arial'; font-style: normal; font-weight: 700; font-size: 17px; line-height: 24px; color: #FF4444; margin: 0;">
        //                                     +10.0%
        //                                 </p>
        //                             </td>
        //                         </tr>
        //                     </table>
        //                     <p style="font-family: 'Arial'; font-style: normal; font-weight: 700; font-size: 17px; line-height: 24px; color: #333333; margin: 0;">150 000 000 → 135 000 000 ₽</p>
        //                 </div>
        //                 <a href="#" target="_blank" style="font-family: 'Arial'; font-style: normal; font-weight: 400; font-size: 17px; line-height: 56px; text-align: center; text-decoration: none; color: #FFFFFF; display: block; background: #5947B3; border-radius: 12px; margin: 32px auto 32px; padding: 0 32px;">
        //                     Все объявления
        //                 </a>
        //                 <p style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0 0 32px;">
        //                     Управлять подписками и сохраненными поисками вы можете в 
        //                     <a href="#" target="_blank" style="text-decoration: none; color: #5947B3;">Личном кабинете</a>
        //                 </p>
        //                 <div style="display: block; margin: 0 0 32px; padding: 32px; background: #F8F7FA; border-radius: 16px;">
        //                     <div style="margin: 0 0 12px;">
        //                         <img src="Fire.png" alt="Fire" style="float: left; display: block; width: 28px; height: 28px; margin: 0 16px 0 0;">
        //                         <p style="font-family: 'Arial'; font-weight: 700; font-size: 20px; line-height: 28px; color: #333333; margin: 0;">База заявок</p>
        //                     </div>
        //                     <p style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0;">
        //                         Воспользуйтесь базой заявок, чтобы получить доступ к расширенной базе лотов. В базе размещены лоты, которые скрыты от покупателей на сайте. Так же вы можете оставить заявку по своим предпочтениям.
        //                     </p>
        //                 </div>
        //                 <div style="display: block; margin: 0 0 32px; padding: 32px; background: #F8F7FA; border-radius: 16px;">
        //                     <div style="margin: 0 0 12px;">
        //                         <img src="Thumbs-Up.png" alt="Thumbs Up" style="float: left; display: block; width: 28px; height: 28px; margin: 0 16px 0 0;">
        //                         <p style="font-family: 'Arial'; font-weight: 700; font-size: 20px; line-height: 28px; color: #333333; margin: 0;">Актуальная информация</p>
        //                     </div>
        //                     <p style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0;">
        //                         Воспользуйтесь базой заявок, чтобы получить доступ к расширенной базе лотов. В базе размещены лоты, которые скрыты от покупателей на сайте. Так же вы можете оставить заявку по своим предпочтениям.
        //                     </p>
        //                 </div>
        //                 <hr style="width: 100%; height: 1px; background: #DEE0E1; border: none; margin: 0 0 32px;">
        //                 <p style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0;">
        //                     <b>Всегда рады помочь вам!</b>
        //                     Если повились вопросы или возникли проблемы, напишите в 
        //                     <a href="#" target="_blank" style="text-decoration: none; color: #5947B3;">@homehunter</a> 
        //                     или воспользуйтесь телеграм-ботом 
        //                     <a href="#" target="_blank" style="text-decoration: none; color: #5947B3;">@homehunter_bot</a> 
        //                     В самом крайнем случае пишите на почту
        //                     <a href="mailto:support@homehunter.ru" target="_blank" style="text-decoration: none; color: #5947B3;">support@homehunter.ru</a> 
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        // `
        // html: `
        //     <div style="width: 100%; padding: 24px 0; background: #F5F5F7;">
        //         <div style="width: 600px; margin: 0 auto; background: #FFFFFF;">
        //             <div style="padding: 16px 32px;">
        //                 <a href="https://homehunter.ru" style="display: block;">
        //                     <img src="logo.png" alt="logo" style="display: block; width: auto; height: 40px; margin: 0;">
        //                 </a>
        //             </div>
        //             <hr style="width: 100%; height: 1px; background: #DEE0E1; border: none; margin: 0;">
        //             <div style="padding: 40px 32px;">
        //                 <p style="font-family: 'Arial'; font-weight: 700; font-size: 26px; line-height: 36px; color: #333333; margin: 0 0 12px;">
        //                     Выгрузка прошла успешно!
        //                 </p>
        //                 <p style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0 0 32px;">
        //                     Дата отчёта: 15 июня 2022 <br>
        //                     HomeHunter ID: 405 440
        //                 </p>
        //                 <p style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0 0 32px;">
        //                     <b>Количество активных объявлений — 1 504</b> <br>
        //                     Городская недвижимость: 890 <br>
        //                     Загородная недвижимость: 904
        //                 </p>
        //                 <a href="#" style="display: block; margin: 0 0 32px; font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #5947B3; text-decoration: none;">Перейти в личный кабинет</a>
        //                 <hr style="width: 100%; height: 1px; background: #DEE0E1; border: none; margin: 0 0 32px;">
        //                 <p style="font-family: 'Arial'; font-weight: 700; font-size: 17px; line-height: 24px; color: #333333; margin: 0 0 12px;">
        //                     Последняя выгрузка:
        //                 </p>
        //                 <p style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0 0 32px;">
        //                     Получено лотов: 1 500 <br>
        //                     Лотов с ошибками: 15 <br>
        //                     Ошибок в изображениях: 2 <br>
        //                     Размещено объявлений: 1 483
        //                 </p>
        //                 <p style="font-family: 'Arial'; font-weight: 700; font-size: 17px; line-height: 24px; color: #333333; margin: 0 0 12px;">
        //                     Размещено объявлений: 1 483
        //                 </p>
        //                 <ul style="list-style: none; padding: 0; margin: 0 0 32px;">
        //                     <li style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0 0 8px;">
        //                         <span style="float:left; display: block; width: 8px; height: 8px; border-radius: 50%; background: #FEDC35; margin: 7px 16px 0 0;"></span>
        //                         новых: 83
        //                     </li>
        //                     <li style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0 0 8px;">
        //                         <span style="float:left; display: block; width: 8px; height: 8px; border-radius: 50%; background: #FEDC35; margin: 7px 16px 0 0;"></span>
        //                         обновлено: 100
        //                     </li>
        //                     <li style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0 0 8px;">
        //                         <span style="float:left; display: block; width: 8px; height: 8px; border-radius: 50%; background: #FEDC35; margin: 7px 16px 0 0;"></span>
        //                         без изменения: 1300
        //                     </li>
        //                 </ul>
        //                 <a href="#" target="_blank" style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 56px; text-align: center; text-decoration: none; color: #FFFFFF; display: block; background: #5947B3; border-radius: 12px; margin: 0 auto 48px; padding: 0 32px;">
        //                     Отчёт о выгрузке
        //                 </a>
        //                 <p style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0 0 32px;">
        //                     Это письмо отправляется вам автоматически один раз и не требует ответа. 
        //                     С информацией о выгрузке и фиде вы можете ознакомиться по 
        //                     <a href="#" style="text-decoration: none; color: #5947B3;">ссылке</a>
        //                     или обратиться в техподдержку.
        //                 </p>
        //                 <hr style="width: 100%; height: 1px; background: #DEE0E1; border: none; margin: 0 0 32px;">
        //                 <p style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0;">
        //                     <b>Всегда рады помочь вам!</b>
        //                     Если повились вопросы или возникли проблемы, напишите в 
        //                     <a href="#" target="_blank" style="text-decoration: none; color: #5947B3;">@homehunter</a> 
        //                     или воспользуйтесь телеграм-ботом 
        //                     <a href="#" target="_blank" style="text-decoration: none; color: #5947B3;">@homehunter_bot</a> 
        //                     В самом крайнем случае пишите на почту
        //                     <a href="mailto:support@homehunter.ru" target="_blank" style="text-decoration: none; color: #5947B3;">support@homehunter.ru</a> 
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        // `
        html: `
            <div style="width: 100%; padding: 24px 0; background: #F5F5F7;">
                <div style="width: 600px; margin: 0 auto; background: #FFFFFF;">
                    <div style="padding: 16px 32px;">
                        <a href="https://homehunter.ru" style="display: block;">
                            <img src="logo.png" alt="logo" style="display: block; width: auto; height: 40px; margin: 0;">
                        </a>
                    </div>
                    <hr style="width: 100%; height: 1px; background: #DEE0E1; border: none; margin: 0;">
                    <div style="padding: 40px 32px;">
                        <p style="font-family: 'Arial'; font-weight: 700; font-size: 26px; line-height: 36px; color: #333333; margin: 0 0 32px;">
                            Цены на эти лоты изменились
                        </p>
                        <p style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0 0 32px;">
                            Подбирайте недвижимость с помощью расширенных фильтров, используйте базу заявок и коллекции. Поиск и подбор недвижимости стал ещё проще.
                        </p>
                        <table>
                            <tr>
                                <td>
                                    <div style="margin: 0 24px 0 0;">
                                        <img src="img.png" alt="img" style="display: block; width: 256px; height: 166px; margin: 0 0 16px; border-radius: 16px;">
                                        <a href="#" style="display: block; font-family: 'Arial'; font-style: normal; font-weight: 700; font-size: 20px; text-decoration: none; line-height: 28px; color: #5947B3; margin: 0 0 12px;">
                                            5-комн. кв, 188.6 м2
                                        </a>
                                        <p style="font-family: 'Arial'; font-style: normal; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0 0 4px;">
                                            ЖК «Кутузовская Ривьера»
                                        </p>
                                        <p style="font-family: 'Arial'; font-style: normal; font-weight: 400; font-size: 15px; line-height: 22px; color: #808080; margin: 0 0 12px;">
                                            ЗАО, Очаково-Матвеевское, <br>
                                            Нежинская улица, 1, корп. 2
                                        </p>
                                        <table>
                                            <tr>
                                                <td>
                                                    <img src="arrow.png" alt="arrow" style="display: block; width: 8px; height: 6px; float: left;">
                                                </td>
                                                <td>
                                                    <p style="font-family: 'Arial'; font-style: normal; font-weight: 700; font-size: 17px; line-height: 24px; color: #11BB88; margin: 0;">
                                                        -10.0%
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                        <p style="font-family: 'Arial'; font-style: normal; font-weight: 700; font-size: 17px; line-height: 24px; color: #333333; margin: 0;">150 000 000 → 135 000 000 ₽</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <img src="img.png" alt="img" style="display: block; width: 256px; height: 166px; margin: 0 0 16px; border-radius: 16px;">
                                        <a href="#" style="display: block; font-family: 'Arial'; font-style: normal; font-weight: 700; font-size: 20px; text-decoration: none; line-height: 28px; color: #5947B3; margin: 0 0 12px;">
                                            5-комн. кв, 212 м2
                                        </a>
                                        <p style="font-family: 'Arial'; font-style: normal; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0 0 4px;">
                                            ЖК «Кутузовская Ривьера»
                                        </p>
                                        <p style="font-family: 'Arial'; font-style: normal; font-weight: 400; font-size: 15px; line-height: 22px; color: #808080; margin: 0 0 12px;">
                                            ЗАО, Очаково-Матвеевское, <br>
                                            Нежинская улица, 1, корп. 2
                                        </p>
                                        <table>
                                            <tr>
                                                <td>
                                                    <img src="arrowUp.png" alt="arrow" style="display: block; width: 8px; height: 6px; float: left;">
                                                </td>
                                                <td>
                                                    <p style="font-family: 'Arial'; font-style: normal; font-weight: 700; font-size: 17px; line-height: 24px; color: #FF4444; margin: 0;">
                                                        +10.0%
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                        <p style="font-family: 'Arial'; font-style: normal; font-weight: 700; font-size: 17px; line-height: 24px; color: #333333; margin: 0;">150 000 000 → 135 000 000 ₽</p>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        <hr style="width: 100%; height: 1px; background: #DEE0E1; border: none; margin: 24px 0; border-radius: 16px;">
                        <a href="#" target="_blank" style="font-family: 'Arial'; font-style: normal; font-weight: 400; font-size: 17px; line-height: 56px; text-align: center; text-decoration: none; color: #FFFFFF; display: block; background: #5947B3; border-radius: 12px; margin: 32px auto 32px; padding: 0 32px;">
                            Все объявления
                        </a>
                        <p style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0 0 32px;">
                            Управлять подписками и сохраненными поисками вы можете в 
                            <a href="#" target="_blank" style="text-decoration: none; color: #5947B3;">Личном кабинете</a>
                        </p>
                        <div style="display: block; margin: 0 0 32px; padding: 32px; background: #F8F7FA; border-radius: 16px;">
                            <div style="margin: 0 0 12px;">
                                <img src="Fire.png" alt="Fire" style="float: left; display: block; width: 28px; height: 28px; margin: 0 16px 0 0;">
                                <p style="font-family: 'Arial'; font-weight: 700; font-size: 20px; line-height: 28px; color: #333333; margin: 0;">База заявок</p>
                            </div>
                            <p style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0;">
                                Воспользуйтесь базой заявок, чтобы получить доступ к расширенной базе лотов. В базе размещены лоты, которые скрыты от покупателей на сайте. Так же вы можете оставить заявку по своим предпочтениям.
                            </p>
                        </div>
                        <div style="display: block; margin: 0 0 32px; padding: 32px; background: #F8F7FA; border-radius: 16px;">
                            <div style="margin: 0 0 12px;">
                                <img src="Thumbs-Up.png" alt="Thumbs Up" style="float: left; display: block; width: 28px; height: 28px; margin: 0 16px 0 0;">
                                <p style="font-family: 'Arial'; font-weight: 700; font-size: 20px; line-height: 28px; color: #333333; margin: 0;">Актуальная информация</p>
                            </div>
                            <p style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0;">
                                Воспользуйтесь базой заявок, чтобы получить доступ к расширенной базе лотов. В базе размещены лоты, которые скрыты от покупателей на сайте. Так же вы можете оставить заявку по своим предпочтениям.
                            </p>
                        </div>
                        <hr style="width: 100%; height: 1px; background: #DEE0E1; border: none; margin: 0 0 32px;">
                        <p style="font-family: 'Arial'; font-weight: 400; font-size: 17px; line-height: 24px; color: #333333; margin: 0;">
                            <b>Всегда рады помочь вам!</b>
                            Если повились вопросы или возникли проблемы, напишите в 
                            <a href="#" target="_blank" style="text-decoration: none; color: #5947B3;">@homehunter</a> 
                            или воспользуйтесь телеграм-ботом 
                            <a href="#" target="_blank" style="text-decoration: none; color: #5947B3;">@homehunter_bot</a> 
                            В самом крайнем случае пишите на почту
                            <a href="mailto:support@homehunter.ru" target="_blank" style="text-decoration: none; color: #5947B3;">support@homehunter.ru</a> 
                        </p>
                    </div>
                </div>
            </div>
        `
    })

    console.log(result)
}

senmail()
