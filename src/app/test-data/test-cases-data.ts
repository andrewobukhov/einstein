export class TestCasesData {
  public static item1 = {
    'id': 6150,
    'key': 'GRP-231972',
    'parentId': 4391,
    'name': 'Intro page (Admin)',
    'summary': '<p>\r\n\t<strong><span style="color:#669966;">Goal:&nbsp;<\/span><\/strong><!-- GOAL --><\/p>\r\n<p>\r\n\t<strong><span style="color:#669966;">User Story: <\/span><a href="http://jira.ringcentral.com/browse/GWA-4498">GWA-4498<\/a>, <a href="http://jira.ringcentral.com/browse/GWA-5297">GWA-5297<\/a> <\/strong><!-- USERSTORY --><\/p>\r\n<p>\r\n\t<strong><span style="color:#669966;">Component: <\/span>STP<\/strong><!-- COMPONENT --><\/p>\r\n<p>\r\n\t<strong><span style="color:#669966;">Feature:<\/span><\/strong> <!-- FEATURE --><\/p>\r\n<p>\r\n\t<strong><span style="color:#669966;">Project: <\/span>EDGE<\/strong><!-- PROJECT --><\/p>\r\n<p>\r\n\t<strong><span style="color:#669966;">Tier(/s): <\/span>Office, Pro<\/strong><!-- TIERS --><\/p>',
    'preconditions': '<p>\r\n\t<strong><span style="color:#669966">Account type(/s): <\/span>Admin, System extension<\/strong><!-- ACCOUNTTYPE --><\/p>\r\n<p>\r\n\t<strong><span style="color:#669966">Extension type(/s): <\/span>Admin<\/strong><!-- EXTENSIONTYPE --><\/p>\r\n<p>\r\n\t<strong><span style="color:#669966">Entry point(/s):&nbsp;<\/span><\/strong> <!-- ENTRYPOINT --><\/p>\r\n<ol>\r\n\t<li>\r\n\t\tCreate new account (Signup funnel or AGS)<\/li>\r\n\t<li>\r\n\t\tOpen activation link&nbsp;<\/li>\r\n\t<li>\r\n\t\tEnter (password, PIN, security question)<\/li>\r\n<\/ol>',
    'version': {'name': 9, 'id': 11460},
    'children': [{
      'name': '<p>\r\n\tClick on &quot;Next&quot; button or Company Info block<\/p>',
      'expectedResult': '<p>\r\n\t&quot;Company Details&quot; page opens and &quot;Users&quot; block appears<\/p>',
      'execution': 0,
      'order': 3
    }, {
      'name': '<p>\r\n\tCheck page<\/p>',
      'expectedResult': '<p>\r\n\tUS/CA/AT&amp;T/Telus:<\/p>\r\n<ol>\r\n\t<li>\r\n\t\t&quot;Your account is now active and ready for setup&quot; text<\/li>\r\n\t<li>\r\n\t\t3 blocks: &quot;Company Info&quot;, &quot;My Info&quot;, &quot;Review&quot;.<\/li>\r\n\t<li>\r\n\t\t&quot;Next&quot; button<\/li>\r\n\t<li>\r\n\t\t&quot;You can also get help by&quot; text is present under &quot;Next&quot; button<\/li>\r\n\t<li>\r\n\t\t&quot;scheduling an implementation appointment for no additional fee&quot; link is present (except AT&amp;T)<\/li>\r\n<\/ol>\r\n<p>\r\n\tUK/EU/AU:<\/p>\r\n<p>\r\n\tSheduler is required and presented on the top.<\/p>\r\n<p>\r\n\tSee: GW-33692 for UK (EU and AU brands were based on UK brand)<\/p>\r\n<p>\r\n\tBT:<\/p>\r\n<p>\r\n\tNo buttons and no links for Scheduler<\/p>',
      'execution': 0,
      'order': 2
    }, {
      'name': '<p>\r\n\tCheck account information on the page<\/p>',
      'expectedResult': '<p>\r\n\tIn the upper on the page present text with information of the curent account:<br />\r\n\t<br />\r\n\t&quot;My account: [company number] Ext. [current extension number]&quot;&nbsp;<\/p>',
      'execution': 0,
      'order': 1
    }],
    'values': {
      '1196': [1339, 1303, 1827, 1815, 1830, 1851, 1834, 1721, 12001, 2239, 1855, 1842, 1823, 1846],
      '1204': [1211],
      '1316': [1643],
      '1200': [1294],
      '1628': [46798]
    },
    'priority': 1,
    'executionType': 1,
    'externalId': 33104,
    'obsolete': false,
    'dateCreated': 1513102704000,
    'createdBy': 'aduard.poteshnov',
    'lastUpdated': 1513102880000,
    'lastUpdatedBy': 'aduard.poteshnov',
    'readOnly': false,
    'testPlansReadOnly': false,
    'containedInTestPlans': false,
    'fromTestlink': true
  };

  public static item2 = {
      'id': 2051,
     'key': 'GRP-132369',
      'parentId': 392,
      'name': 'Phone Verification page',
      'summary': '<p>\r\n\t<strong><span style="color:#669966;">Goal:&nbsp;<\/span><\/strong>If account is not confirmed, its confirmation is invoked. When confirming account, JEDI can demand phone number verification. In this case the Admin user is redirected to Phone Verification page.<!-- GOAL --><\/p>\r\n<div>\r\n\t<span style="color:#ff0000;">!!!NOTE:<\/span> This page is applicable for: Office Owner, Professional Owner, Fax Owner.<\/div>\r\n<p>\r\n\t<strong><span style="color:#669966;">User Story: <\/span><a href="https://jira.ringcentral.com/browse/GWA-6628">GWA-6628<\/a><\/strong><!-- USERSTORY --><\/p>\r\n<p>\r\n\t<strong><span style="color:#669966;">Component: <\/span>STP<\/strong><!-- COMPONENT --><\/p>\r\n<p>\r\n\t<strong><span style="color:#669966;">Feature: <\/span>Account Verification<\/strong><!-- FEATURE --><\/p>\r\n<p>\r\n\t<strong><span style="color:#669966;">Project: <\/span>ES_Edge<\/strong><!-- PROJECT --><\/p>\r\n<p>\r\n\t<strong><span style="color:#669966;">Tier(/s): <\/span>US/CA/UK/EU<\/strong><!-- TIERS --><\/p>',
      'preconditions': '<div>\r\n\t&nbsp;<\/div>\r\n<ol>\r\n\t<li>\r\n\t\tPass signup and get activation e-mail.<\/li>\r\n\t<li>\r\n\t\tRemember &quot;Contact number&quot; for step #3 (which was used as Contact Number on Signup)<\/li>\r\n\t<li>\r\n\t\tTo emulate the situation when phone verification is needed set cookie confirm_result - NotConfirmed_RequiresPhoneVerification on&nbsp;http://&lt;environment&gt;/express-setup-edge/express-setup-edge/tools/confirmation/index.php page.<\/li>\r\n<\/ol>\r\n<p>\r\n\t<strong><span style="color:#669966">Account type(/s):&nbsp;<\/span><\/strong> <!-- ACCOUNTTYPE --><\/p>\r\n<p>\r\n\t<strong><span style="color:#669966">Extension type(/s): <\/span>System extension<\/strong><!-- EXTENSIONTYPE --><\/p>\r\n<p>\r\n\t<strong><span style="color:#669966">Entry point(/s):&nbsp;<\/span><\/strong> <!-- ENTRYPOINT --><\/p>\r\n<p>\r\n\t&nbsp;<\/p>\r\n<p>\r\n\t&nbsp;<\/p>\r\n<p>\r\n\t<strong>Note:<\/strong> cookie -&gt; confirm_result=NotConfirmed_RequiresPhoneVerification<\/p>',
      'version': {'name': 2, 'id': 3108},
      'children': [{
        'name': '<div>\r\n\t<ol>\r\n\t\t<li>\r\n\t\t\tClick &quot;Did you phone didn&#39;t ring? Try again?&quot; link<\/li>\r\n\t\t<li>\r\n\t\t\tDelete cookie confirm_result - NotConfirmed_RequiresPhoneVerification&nbsp;<\/li>\r\n\t\t<li>\r\n\t\t\tClick on &quot;pencil&quot; icon.<\/li>\r\n\t\t<li>\r\n\t\t\tInput correct verification code -&gt; click &quot;Next&quot;<\/li>\r\n\t\t<li>\n\t\t\tInput correct verification code -&gt; click &quot;Next&quot;</li>\n\t\t<li>\n\t\t\tInput correct verification code -&gt; click &quot;Next&quot;</li>\n\t\t<li>\n\t\t\tInput correct verification code -&gt; click &quot;Next&quot;</li>\n\t\t<li>\n\t\t\tInput correct verification code -&gt; click &quot;Next&quot;</li>\n\t\t<li>\n\t\t\tInput correct verification code -&gt; click &quot;Next&quot;</li>\n\t\t<li>\n\t\t\tInput correct verification code -&gt; click &quot;Next&quot;</li>\n\t\t<li>\n\t\t\tInput correct verification code -&gt; click &quot;Next&quot;</li>\n\t\t<li>\n\t\t\tInput correct verification code -&gt; click &quot;Next&quot;</li>\n\t\t<li>\n\t\t\tInput correct verification code -&gt; click &quot;Next&quot;</li>\n\t<\/ol>\r\n<\/div>\r\n<p>\r\n\t&nbsp;<\/p>',
        'expectedResult': '<p>\r\n\tMobile Number verification passed. You have proceeded to &quot;Security Info&quot; page<\/p>',
        'execution': 0,
        'order': 12
      }, {
        'name': '<p>\r\n\tCheck reappearance of captcha<\/p>',
        'expectedResult': '<p>\r\n\tApproximate the appearance of two minutes<\/p>',
        'execution': 0,
        'order': 10
      }, {
        'name': '<p>\r\n\tObserve page<\/p>',
        'expectedResult': '<ol>\r\n\t<li>\r\n\t\tLogo is displayed related to brand.<\/li>\r\n\t<li>\r\n\t\tTitle:\r\n\t\t<ul>\r\n\t\t\t<li>\r\n\t\t\t\t&quot;Mobile Number Verification&quot; (en_us).<\/li>\r\n\t\t\t<li>\r\n\t\t\t\tMobile number verification (en_gb).<\/li>\r\n\t\t<\/ul>\r\n\t<\/li>\r\n\t<li>\r\n\t\tText: &quot;Use for authentication of your mobile phone number&quot;<\/li>\r\n<\/ol>',
        'execution': 0,
        'order': 2
      }, {
        'name': '<p>\r\n\tClick &quot;Pencil&quot; button in the &quot;Mobile Number&quot; field<\/p>',
        'expectedResult': '<ol>\r\n\t<li>\r\n\t\t&quot;Verification code&quot; field disappeared<\/li>\r\n\t<li>\r\n\t\t&quot;Mobile Number&quot; field becomes editable<\/li>\r\n\t<li>\r\n\t\t&quot;Pencil&quot; button disappeared from filed<\/li>\r\n<\/ol>',
        'execution': 0,
        'order': 9
      }, {
        'name': '<p>\r\n\tCheck the appearing of saved &quot;Contact number&quot; in &quot;Mobile Number&quot; field<\/p>',
        'expectedResult': '<p>\r\n\tThe number should be the same as &quot;Contact number&quot;<\/p>',
        'execution': 0,
        'order': 3
      }, {
        'name': '<div>\r\n\tEnter incorrect verification code&nbsp;field and press &quot;Next&quot;<\/div>',
        'expectedResult': '<ol>\r\n\t<li>\r\n\t\tAn error message &quot;Verification code is not valid&quot; appear under appropriate field.<\/li>\r\n<\/ol>',
        'execution': 0,
        'order': 11
      }, {
        'name': '<p>\r\n\tSet cookie &nbsp;&#39;confirm_result&#39; &nbsp;and open activation link in the same browser.<\/p>',
        'expectedResult': '<p>\r\n\tYou are redirected to &#39;<strong>Mobile Phone Number Verification<\/strong>&#39; page<\/p>',
        'execution': 0,
        'order': 1
      }, {
        'name': '<ol>\r\n\t<li>\r\n\t\tEnter number and don&#39;t pass the captcha<\/li>\r\n<\/ol>',
        'expectedResult': '<p>\r\n\t&quot;Next&quot; button is inactive and not clickable<\/p>',
        'execution': 0,
        'order': 5
      }, {
        'name': '<p>\r\n\tPass the captcha and verify help text<\/p>',
        'expectedResult': '<p>\r\n\t&quot;By clicking Next, you will be receiving a phone call in a few seconds that will provide you with a verification code that you must enter in the following screen.&quot; help text appears above &quot;Next&quot; button<\/p>',
        'execution': 0,
        'order': 6
      }, {
        'name': '<p>\r\n\tEnter correct phone number and pass captcha<\/p>',
        'expectedResult': '<ol>\r\n\t<li>\r\n\t\t&quot;Verification code&quot; field appears&nbsp;<\/li>\r\n\t<li>\r\n\t\t&quot;Next&quot; button becomes inactive<\/li>\r\n\t<li>\r\n\t\t&nbsp;&quot;Mobile Number field becomes not editable and have &quot;Pencil&quot; button in the field<\/li>\r\n\t<li>\r\n\t\t&quot;Did you phone&nbsp;didn&#39;t&nbsp;ring? Try again?&quot; link appears under &quot;Next&quot; button (en_gb: Did your phone not ring? Try again?)<\/li>\r\n<\/ol>',
        'execution': 0,
        'order': 8
      }, {
        'name': '<p>\r\n\tLeave &quot;Mobile Number&quot; input field empty and try to click &quot;Next&quot; button<\/p>',
        'expectedResult': '<ol>\r\n\t<li>\r\n\t\t&quot;Next&quot; button is inactive and not clickable<\/li>\r\n\t<li>\r\n\t\t&quot;Please enter a mobile phone number&quot; error message appears under field<\/li>\r\n\t<li>\r\n\t\tPlaceholder &quot;Mobile Number&quot;&nbsp;(en_gb: Mobile number)&nbsp;present in the input field<\/li>\r\n<\/ol>\r\n<div>\r\n\t&nbsp;<\/div>',
        'execution': 0,
        'order': 4
      }, {
        'name': '<ol>\r\n\t<li>\r\n\t\tClick on &quot;pencil&quot; icon.<\/li>\r\n\t<li>\r\n\t\tEnter wrong number and pass captcha<\/li>\r\n<\/ol>',
        'expectedResult': '<div>\r\n\tAn error message &quot;The contact phone number you entered appears to be invalid, please check the number and try again&quot; appear under appropriate field.<\/div>\r\n<div>\r\n\t&nbsp;<\/div>\r\n<div>\r\n\ten_gb: &quot;The contact phone number that you&#39;ve entered appears to be invalid. Please check the number and try again&quot;<\/div>',
        'execution': 0,
        'order': 7
      }],
      'values': {'1196': [1827, 1855, 1815, 2786, 1823, 1303, 1721, 1216, 2768, 1830], '1316': [1643], '1200': [1294], '1204': [1211]},
      'priority': 1,
      'executionType': 0,
      'externalId': 35461,
      'obsolete': false,
      'dateCreated': 1506927140000,
      'createdBy': 'oksana.kavchuk',
      'lastUpdated': 1506927140000,
      'lastUpdatedBy': null,
      'readOnly': false,
      'testPlansReadOnly': false,
      'containedInTestPlans': false,
      'fromTestlink': true
    };
}
