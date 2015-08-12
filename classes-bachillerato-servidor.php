<?php
while ($post = each($_POST))
{
echo $post[0] . " = " . $post[1] 
." ";
}

?>