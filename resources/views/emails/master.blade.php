<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>{{ config('mail.from.name') }}</title>

        <style type="text/css">
            p { font-family: Helvetica, Arial, sans-serif; font-size: 13px; lien-height: 18px; color: #333333; }
        </style>
    </head>

    <body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0" style="font-family: Helvetica, Arial, sans-serif; font-size: 13px; lien-height: 18px;">
        <div class="content" style="margin-bottom: 25px;">
            @yield('content')
        </div><!-- .content -->

        <div class="footer">
            <p style="font-size: 13px; line-height: 18px;">{{ config('mail.from.name') }}</p>
        </div><!-- .footer -->
    </body>
</html>

