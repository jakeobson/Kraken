<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Document;
use DB;

class DocumentsController extends Controller
{
    public function index(){
        return Document::all();
    }

    public function store(Request $request){
        $request->validate([
            'document' => 'required|mimes:png,jpg,pdf,doc,docx|max:5120'
        ]);


        $result = Document::upload($request);

        return $result;
    }

    public function search(Request $request){
        $search = $request->get('search');

        return Document::where('filename', 'LIKE', '%'.$search.'%')->orWhere('extension', $search)->get();
    }

    public function delete(Document $document){

        $document->delete();

        return response()->json(null, 204);
    }
}
