;(function ($) {
  'use strict'

  $(document).on('ready', function () {
    const array = [
      [
        'heading1',
        'collapse1',
        'How long does it take to complete a website project?',
        'The timeline for a website project depends on various factors such as the complexity of the design, the number of features required, and the amount of content. We work closely with our clients to define project milestones and provide an estimated timeline tailored to their specific needs.',
      ],
      [
        'heading2',
        'collapse2',
        'Can I have input in the design process?',
        'Absolutely! We value your input and believe in collaboration. Throughout the design process, we actively seek your feedback to ensure that the website aligns with your vision and goals. We welcome your suggestions and work together to create a website that represents your brand effectively.',
      ],
      [
        'heading3',
        'collapse3',
        'Will my website be mobile-friendly and responsive?',
        'Yes, all websites we develop are mobile-friendly and responsive. We prioritize creating a seamless user experience across various devices and screen sizes. Your website will adapt beautifully to desktops, tablets, and mobile phones, providing an optimal browsing experience for all users.',
      ],
      [
        'heading4',
        'collapse4',
        'Can I update the content on my website myself?',
        'Yes, we provide content management systems (CMS) like WordPress, which allows you to make content updates and modifications easily without requiring technical expertise. We will provide training and ongoing support to ensure you can manage your website effectively.',
      ],
      [
        'heading5',
        'collapse5',
        'What happens after the website is launched? Do you provide ongoing support?',
        'Yes, we provide ongoing support and maintenance services to ensure the smooth functioning of your website. Our team is available to assist with any technical issues, perform updates, and address any queries you may have. We offer different support packages tailored to your specific requirements.',
      ],

      //more items
    ]
    console.log('Faq populated')

    array.forEach(function (current) {
      let faqId = current[0],
        collapseId = current[1],
        question = current[2],
        answer = current[3]

      $('div.panel-group').append(
        `
        <div class="panel panel-default">
        <div class="panel-heading" role="tab" id="` +
          faqId +
          `">
            <h4 class="panel-title">
                <a
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#` +
          collapseId +
          `"
                    aria-expanded="false"
                    aria-controls="` +
          collapseId +
          `"
                    class="collapsed"
                >
                ` +
          question +
          `
                </a>
            </h4>
        </div>
        <div
            id="` +
          collapseId +
          `"
            class="panel-collapse in collapse"
            role="tabpanel"
            aria-labelledby="` +
          faqId +
          `" 
            style=""
        >
            <div class="panel-body">
            ` +
          answer +
          `
            </div>
        </div>
    </div>
        `,
      )
    })
  })
})(jQuery) // End jQuery
