<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Document extends Model
{
    use SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $fillable = ['filename', 'path', 'extension'];

    public static function upload($request){
        if($request->file('document'))
        {
            $file = $request->file('document');

            $originalName = $file->getClientOriginalName();

            $extension = $file->extension();

            $name = date('Ymd').'-'.time().'.'.$extension;

            $path = $file->storeAs('documents', $name);

            $document = static::create([
                'filename' => $originalName,
                'path' => $path,
                'extension' => $extension
            ]);

            return $document;

        }

        return false;
    }
}
